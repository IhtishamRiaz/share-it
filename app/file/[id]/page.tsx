"use client";

import { app } from "@/firebaseConfig";
import { fileInfo } from "@/lib/types";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

const FileView = ({ params }: { params: { id: string } }) => {
   const db = getFirestore(app);
   const [fileInfo, setFileInfo] = useState<fileInfo>();
   const [password, setPassword] = useState("");
   const [showPassword, setShowPassword] = useState(false);

   const handleDownload = () => {
      if (fileInfo?.password !== password) return;

      window.open(fileInfo?.fileUrl);
   };

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

   return (
      <div className="flex flex-col items-center px-4 justify-center gap-8 min-h-svh">
         <Link href={"/"}>
            <Image src={"/logo.png"} width={200} height={200} alt="logo" />
         </Link>

         {fileInfo && (
            <div className="flex flex-col items-center justify-center bg-white rounded-lg px-4 py-6 max-w-[450px] w-full">
               <h1 className="text-2xl font-medium text-gray-600 text-center">
                  <span className="text-primary font-semibold">
                     {fileInfo?.userName}
                  </span>
                  <br />
                  Shared this file with you
               </h1>
               <Image
                  src={"/download-file.gif"}
                  width={150}
                  height={150}
                  alt={"download gif"}
                  className="my-6"
               />
               <p className="text-lg text-gray-500 font-medium text-center">
                  {fileInfo?.fileName} <br /> {fileInfo?.fileType}{" "}
                  <span className="text-sm">⚡</span>{" "}
                  {(fileInfo?.fileSize / 1024).toFixed(0)} KB
               </p>

               {fileInfo?.password && (
                  <div className="relative max-w-[270px] w-full mt-5">
                     <input
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter password to download"
                        className="border rounded-md flex items-center justify-between text-gray-600 h-10 px-3 outline-none w-full"
                     />
                     <button
                        onClick={() => setShowPassword(!showPassword)}
                        className={
                           "text-primary text-xl absolute top-1/2 -translate-y-1/2 right-3 transition-all"
                        }
                     >
                        {showPassword ? <IoMdEyeOff /> : <IoMdEye />}
                     </button>
                  </div>
               )}

               <button
                  type="submit"
                  disabled={fileInfo?.password !== password}
                  onClick={handleDownload}
                  className="text-white bg-primary w-full rounded-full py-2 px-4 hover:bg-primary-muted active:bg-primary active:scale-95 transition-all mt-8 disabled:bg-slate-400 disabled:active:scale-100"
               >
                  Download
               </button>
            </div>
         )}
      </div>
   );
};

export default FileView;
