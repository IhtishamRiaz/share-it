import Image from "next/image";
import React from "react";
import { LuX } from "react-icons/lu";

const FilePreview = ({
   file,
   removeFile,
}: {
   file: File;
   removeFile: () => void;
}) => {
   return (
      <div className="flex items-center justify-between max-w-[400px] w-full mt-5 rounded-md p-2 border border-blue-200">
         <div className="flex irems-center gap-4 pl-2">
            <Image
               src="/file-icon.png"
               width={150}
               height={100}
               alt="file"
               className="w-12"
            />
            <div className="flex flex-col justify-center">
               <h2 className="font-semibold">{file.name}</h2>
               <p className="text-sm text-gray-500">
                  {file.type + " - " + (file.size / 1024 / 1024).toFixed(2)} MB
               </p>
            </div>
         </div>
         <LuX
            className="text-2xl cursor-pointer text-red-500"
            onClick={removeFile}
         />
      </div>
   );
};

export default FilePreview;
