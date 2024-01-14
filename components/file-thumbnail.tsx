import type { fileInfo } from "@/lib/types";
import Image from "next/image";
import React from "react";

const FileThumbnail = ({ fileInfo }: { fileInfo: fileInfo }) => {
   return (
      <div className="border-2 basis-1/2 rounded-md flex items-center justify-center flex-col gap-10">
         <Image
            src={fileInfo?.fileUrl}
            width={450}
            height={450}
            alt="file"
            className="max-w-[350px]"
         />
         <div className="flex flex-col justify-center text-center gap-1">
            <h2 className="font-semibold">{fileInfo?.fileName}</h2>
            <p className="text-sm text-gray-500">
               {fileInfo?.fileType +
                  " - " +
                  (fileInfo?.fileSize / 1024 / 1024).toFixed(2)}{" "}
               MB
            </p>
         </div>
      </div>
   );
};

export default FileThumbnail;
