"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { app } from "@/firebaseConfig";
import { fileInfo } from "@/lib/types";

const Files = () => {
   const [files, setFiles] = useState<Array<any>>([]);
   const [querry, setQuerry] = useState("");

   useEffect(() => {
      const getAllFiles = async () => {
         const db = getFirestore(app);
         const querySnapshot = await getDocs(collection(db, "files"));

         const filesArray = querySnapshot.docs.map((doc) => {
            return {
               id: doc.id,
               ...doc.data(),
            };
         });
         setFiles(filesArray);
      };
      getAllFiles();
   }, []);

   console.log(files);

   return (
      <div className="mt-10 px-4 w-full md:max-w-[1400px] mx-auto">
         <h1 className="mb-10 text-2xl text-gray-700 font-semibold">
            All Files
         </h1>
         <div>
            <input
               type="text"
               placeholder="Search for a file"
               className="flex items-center justify-between h-10 px-2 border rounded-md outline-none w-full max-w-[300px]"
               onChange={(e) => setQuerry(e.target.value)}
            />
         </div>
         <div className="rounded-lg border border-gray-200 bg-white">
            <div className="overflow-x-auto rounded-t-lg">
               <table className="min-w-full divide-y-2 divide-gray-200text-sm">
                  <thead className="text-left">
                     <tr>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                           File Name
                        </th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                           Type
                        </th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                           Size
                        </th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900"></th>
                     </tr>
                  </thead>

                  <tbody className="divide-y divide-gray-200">
                     {files?.map((file) => (
                        <tr
                           key={file.id}
                           className="even:bg-slate-50 text-gray-700"
                        >
                           <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                              {file.fileName}
                           </td>
                           <td className="whitespace-nowrap px-4 py-2">
                              {file.fileType}
                           </td>
                           <td className="whitespace-nowrap px-4 py-2">
                              {(file.fileSize / 1024).toFixed(0) || 0} KB
                           </td>
                           <td className="whitespace-nowrap px-4 py-2 text-primary">
                              <Link href={`/file-preview/${file.id}`}>
                                 View
                              </Link>
                           </td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>

            <div className="rounded-b-lg border-t border-gray-200 px-4 py-2">
               <ol className="flex justify-end gap-1 text-xs font-medium">
                  <li>
                     <a
                        href="#"
                        className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900"
                     >
                        <span className="sr-only">Prev Page</span>
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           className="h-3 w-3"
                           viewBox="0 0 20 20"
                           fill="currentColor"
                        >
                           <path
                              fillRule="evenodd"
                              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                              clipRule="evenodd"
                           />
                        </svg>
                     </a>
                  </li>

                  <li>
                     <a
                        href="#"
                        className="block h-8 w-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
                     >
                        1
                     </a>
                  </li>

                  <li className="block h-8 w-8 rounded border-blue-600 bg-blue-600 text-center leading-8 text-white">
                     2
                  </li>

                  <li>
                     <a
                        href="#"
                        className="block h-8 w-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
                     >
                        3
                     </a>
                  </li>

                  <li>
                     <a
                        href="#"
                        className="block h-8 w-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
                     >
                        4
                     </a>
                  </li>

                  <li>
                     <a
                        href="#"
                        className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900"
                     >
                        <span className="sr-only">Next Page</span>
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           className="h-3 w-3"
                           viewBox="0 0 20 20"
                           fill="currentColor"
                        >
                           <path
                              fillRule="evenodd"
                              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                              clipRule="evenodd"
                           />
                        </svg>
                     </a>
                  </li>
               </ol>
            </div>
         </div>
      </div>
   );
};

export default Files;
