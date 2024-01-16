"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
   collection,
   getDocs,
   getFirestore,
   query,
   where,
} from "firebase/firestore";
import { app } from "@/firebaseConfig";
import { fileInfo } from "@/lib/types";
import { useUser } from "@clerk/nextjs";
import { cn } from "@/lib/utils";

const Files = () => {
   const [files, setFiles] = useState<Array<any>>([]);
   const [searchQuerry, setSearchQuerry] = useState("");
   const [currentPage, setCurrentPage] = useState(1);
   const { user } = useUser();
   const filesPerPage = 10;

   useEffect(() => {
      const getAllFiles = async () => {
         if (!user?.id) return;

         const db = getFirestore(app);
         const filesRef = collection(db, "files");
         const q = query(filesRef, where("userId", "==", user?.id));
         const querySnapshot = await getDocs(q);

         const filesArray = querySnapshot.docs.map((doc) => {
            return {
               id: doc.id,
               ...doc.data(),
            };
         });
         setFiles(filesArray);
      };
      getAllFiles();
   }, [user?.id]);

   const filteredFiles = files?.filter((file) =>
      file.fileName.toLowerCase().includes(searchQuerry.toLowerCase())
   );

   const indexOfLastFile = currentPage * filesPerPage;
   const indexOfFirstFile = indexOfLastFile - filesPerPage;
   const totalPages = Math.ceil(filteredFiles?.length / filesPerPage);
   const paginationCount = Array.from(
      { length: totalPages },
      (_, index) => index + 1
   );

   const currentPageFiles = filteredFiles?.slice(
      indexOfFirstFile,
      indexOfLastFile
   );

   const handlePrevPage = () => {
      if (currentPage > 1) {
         setCurrentPage(currentPage - 1);
      }
   };

   const handleNextPage = () => {
      if (currentPage < totalPages) {
         setCurrentPage(currentPage + 1);
      }
   };

   return (
      <div className="mt-10 px-4 w-full md:max-w-[1400px] mx-auto">
         <h1 className="mb-6 text-2xl text-gray-700 font-semibold">
            All Files
         </h1>
         <div>
            <input
               type="text"
               placeholder="Search for a file"
               className="flex items-center justify-between h-10 px-2 mb-6 border rounded-md outline-none w-full max-w-[300px]"
               onChange={(e) => setSearchQuerry(e.target.value)}
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
                     {currentPageFiles?.length === 0 && (
                        <tr>
                           <td
                              colSpan={4}
                              className="whitespace-nowrap px-4 py-6 font-semibold text-gray-900 text-center text-xl"
                           >
                              No File Found...
                           </td>
                        </tr>
                     )}
                     {currentPageFiles?.map((file) => (
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
               <div className="flex justify-end gap-1 text-xs font-medium">
                  <button
                     onClick={handlePrevPage}
                     className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 hover:bg-slate-200 active:bg-slate-50 transition-all"
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
                  </button>

                  {paginationCount.map((page) => (
                     <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={cn(
                           "block h-8 w-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900 hover:bg-slate-200 active:bg-slate-50 transition-all",
                           {
                              "bg-primary text-white hover:bg-primary active:bg-primary":
                                 currentPage === page,
                           }
                        )}
                     >
                        {page}
                     </button>
                  ))}

                  <button
                     onClick={handleNextPage}
                     className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 hover:bg-slate-200 active:bg-slate-50 transition-all"
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
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Files;
