import type { fileInfo } from "@/lib/types";
import Image from "next/image";
import React from "react";

const FileThumbnail = ({ fileInfo }: { fileInfo: fileInfo }) => {
   console.log(fileInfo?.fileType);
   const fileTypeSuffix = fileInfo?.fileType.split("/")[1];
   console.log(fileTypeSuffix);

   return (
      <div className="flex items-center justify-center flex-col gap-8 border shadow-sm rounded-md basis-1/2 bg-white py-3 px-4">
         {fileInfo && (
            <>
               {fileTypeSuffix === "png" ||
               fileTypeSuffix === "jpg" ||
               fileTypeSuffix === "jpeg" ||
               fileTypeSuffix === "gif" ||
               fileTypeSuffix === "webp" ? (
                  <Image
                     src={fileInfo?.fileUrl}
                     width={400}
                     height={400}
                     alt={"file"}
                     className="max-w-[250px]"
                  />
               ) : (
                  <Image
                     src={"/file-icon.png"}
                     width={400}
                     height={400}
                     alt={"file"}
                     className="max-w-[250px]"
                  />
               )}
               <div className="flex flex-col justify-center text-center gap-1">
                  <h2 className="font-semibold">{fileInfo?.fileName}</h2>
                  <p className="text-sm text-gray-500">
                     {fileInfo?.fileType +
                        " - " +
                        (fileInfo?.fileSize / 1024 / 1024).toFixed(2)}{" "}
                     MB
                  </p>
               </div>
            </>
         )}
      </div>
   );
};

export default FileThumbnail;
