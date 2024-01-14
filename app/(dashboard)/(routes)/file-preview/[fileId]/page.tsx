"use client";

import FileThumbnail from "@/components/file-thumbnail";
import { app } from "@/firebaseConfig";
import { fileInfo } from "@/lib/types";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";

const FilePreview = ({ params }: { params: { fileId: string } }) => {
   const db = getFirestore(app);
   const [fileInfo, setFileInfo] = useState<fileInfo>();

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
      <div className="border mt-16">
         <FileThumbnail fileInfo={fileInfo as fileInfo} />
      </div>
   );
};

export default FilePreview;
