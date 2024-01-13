import UploadForm from "@/components/upload-form";
import React from "react";

const Upload = () => {
   return (
      <div className="flex items-center justify-center flex-col p-5 px-8 md:px-28">
         <h2 className="text-xl m-5">
            Start <strong className="text-primary">Uploading</strong> Files and
            <strong className="text-primary"> Share</strong> it.
         </h2>
         <UploadForm />
      </div>
   );
};

export default Upload;
