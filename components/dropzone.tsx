import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { toast } from "sonner";

const Dropzone = ({
   setFile,
}: {
   setFile: React.Dispatch<React.SetStateAction<File | undefined>>;
}) => {
   const onDrop = useCallback(
      (acceptedFiles: File[]) => {
         if (acceptedFiles[0].size < 2000000) {
            setFile(acceptedFiles[0]);
         } else {
            toast.error("Maximum File Upload Size is 2MB");
         }
      },
      [setFile]
   );

   const { getRootProps, getInputProps, isDragActive } = useDropzone({
      onDrop,
   });

   return (
      <div
         {...getRootProps()}
         className={cn(
            "flex flex-col items-center justify-center w-full h-64 border-2 border-blue-300 hover:border-blue-400 border-dashed rounded-lg cursor-pointer bg-blue-50 hover:bg-blue-100 transition-all",
            {
               "border-blue-400 bg-blue-100": isDragActive,
            }
         )}
      >
         <input {...getInputProps()} />
         {isDragActive ? (
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
               <svg
                  className="w-12 h-12 mb-4 text-primary"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
               >
                  <path
                     stroke="currentColor"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     strokeWidth="2"
                     d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
               </svg>
               <p className="mb-2 text-lg md:text-2xl text-gray-500 dark:text-gray-400">
                  Yes <strong className="text-primary">Drop</strong> it right
                  here!!
               </p>
               <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400">
                  SVG, PNG, JPG or GIF (Max: 2MB)
               </p>
            </div>
         ) : (
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
               <svg
                  className="w-12 h-12 mb-4 text-primary"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
               >
                  <path
                     stroke="currentColor"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     strokeWidth="2"
                     d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
               </svg>
               <p className="mb-2 text-lg md:text-2xl text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Click to upload</span> or{" "}
                  <strong className="text-primary">drag </strong>
                  and <strong className="text-primary">drop</strong>
               </p>
               <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400">
                  SVG, PNG, JPG or GIF (Max: 2MB)
               </p>
            </div>
         )}
      </div>
   );
};

export default Dropzone;
