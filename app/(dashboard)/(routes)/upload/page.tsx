"use client";

import UploadForm from "@/components/upload-form";
import { app } from "@/firebaseConfig";
import { generateRandomString } from "@/lib/utils";
import { useUser } from "@clerk/nextjs";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import {
   getDownloadURL,
   getStorage,
   ref,
   uploadBytesResumable,
} from "firebase/storage";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "sonner";

const Upload = () => {
   const [progress, setProgress] = useState(0);
   const storage = getStorage(app);
   const db = getFirestore(app);
   const { user } = useUser();
   const router = useRouter();

   const uploadFile = (file: File) => {
      const encodedFileName = encodeURIComponent(file.name);

      const fileRef = ref(storage, "uploaded-files/" + encodedFileName);
      const uploadTask = uploadBytesResumable(fileRef, file);

      uploadTask.on(
         "state_changed",
         (snapshot) => {
            const progress =
               (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setProgress(progress);
         },
         (error) => {
            console.error("Error Uploading file:", error);
         },
         () => {
            toast.success("File Uploaded Successfully");
            getDownloadURL(uploadTask.snapshot.ref)
               .then((downloadURL) => {
                  saveFileInfo(file, downloadURL)
                     .then((docId) => {
                        router.push(`/file-preview/${docId}`);
                     })
                     .catch((error) => {
                        console.error("Error saving file info:", error);
                     });
               })
               .catch((error) => {
                  console.error("Error getting download URL:", error);
               });
         }
      );
   };

   const saveFileInfo = async (file: File, downloadURL: string) => {
      const docId = generateRandomString().toString();

      await setDoc(doc(db, "files", docId), {
         id: docId,
         fileName: file.name,
         fileSize: file.size,
         fileType: file.type,
         fileUrl: downloadURL,
         userId: user?.id,
         userEmail: user?.primaryEmailAddress?.emailAddress,
         userName: user?.fullName,
         password: "",
         shortUrl: process.env.NEXT_PUBLIC_BASE_URL + "file/" + docId,
      });
      return docId;
   };

   return (
      <div className="flex items-center justify-center flex-col p-5 px-4 md:px-28">
         <h2 className="text-xl m-5 text-center">
            Start <strong className="text-primary">Uploading</strong> Files and
            <strong className="text-primary"> Share</strong> it.
         </h2>
         <UploadForm uploadFile={uploadFile} progress={progress} />
      </div>
   );
};

export default Upload;
