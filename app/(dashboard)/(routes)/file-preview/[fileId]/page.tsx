"use client";

import FilePreviewForm from "@/components/file-preview-form";
import FileThumbnail from "@/components/file-thumbnail";
import { app } from "@/firebaseConfig";
import { fileInfo } from "@/lib/types";
import { getFirestore, doc, getDoc, updateDoc } from "firebase/firestore";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IoCaretBackOutline } from "react-icons/io5";

const FilePreview = ({ params }: { params: { fileId: string } }) => {
   const db = getFirestore(app);
   const [fileInfo, setFileInfo] = useState<fileInfo>();

   const addPassword = async (password: string) => {
      const docRed = doc(db, "files", params.fileId);
      await updateDoc(docRed, {
         password,
      });
   };

   useEffect(() => {
      const getFileInfo = async () => {
         const docRef = doc(db, "files", params.fileId);
         const docSnap = await getDoc(docRef);

         if (docSnap.exists()) {
            setFileInfo(docSnap.data() as fileInfo);
         } else {
            console.log("No such document!");
         }
      };
      getFileInfo();
   }, [db, params.fileId]);

   return (
      <div className="mt-16 p-5 px-8 w-full md:max-w-[1100px] mx-auto">
         <Link
            href="/upload"
            className="inline-flex items-center gap-2 mb-8 text-lg font-medium"
         >
            <IoCaretBackOutline className="text-2xl" />
            Go Back to Upload
         </Link>

         <div className="flex flex-col gap-4 lg:flex-row">
            <FileThumbnail fileInfo={fileInfo as fileInfo} />
            <FilePreviewForm
               fileInfo={fileInfo as fileInfo}
               addPassword={addPassword}
            />
         </div>
      </div>
   );
};

export default FilePreview;
