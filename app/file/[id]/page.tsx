"use client";

import { app } from "@/firebaseConfig";
import { fileInfo } from "@/lib/types";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import React, { useEffect, useState } from "react";

const FileView = ({ params }: { params: { id: string } }) => {
   const db = getFirestore(app);
   const [fileInfo, setFileInfo] = useState<fileInfo>();

   useEffect(() => {
      const getFileInfo = async () => {
         const docRef = doc(db, "files", params.id);
         const docSnap = await getDoc(docRef);

         if (docSnap.exists()) {
            setFileInfo(docSnap.data() as fileInfo);
         } else {
            console.log("No such document!");
         }
      };
      getFileInfo();
   }, [db, params.id]);

   return <div>{fileInfo?.fileName}</div>;
};

export default FileView;
