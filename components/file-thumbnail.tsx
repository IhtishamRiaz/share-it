import type { fileInfo } from "@/lib/types";
import Image from "next/image";
import React from "react";

const FileThumbnail = ({ fileInfo }: { fileInfo: fileInfo }) => {
   return (
      <div className="border rounded-md">
         <Image src={fileInfo?.fileUrl} width={150} height={100} alt="file" />
      </div>
   );
};

export default FileThumbnail;
