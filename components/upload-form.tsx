import React, { useState } from "react";
import FilePreview from "./file-preview";
import ProgressBar from "./progress-bar";
import Dropzone from "./dropzone";

interface UploadFormProps {
   progress: number;
   uploadFile: (file: File) => void;
}

const UploadForm = ({ progress, uploadFile }: UploadFormProps) => {
   const [file, setFile] = useState<File>();

   return (
      <>
         <Dropzone setFile={setFile} />

         {file && (
            <FilePreview file={file} removeFile={() => setFile(undefined)} />
         )}

         {progress > 0 ? (
            <ProgressBar progress={progress} />
         ) : (
            <button
               disabled={!file}
               onClick={() => {
                  if (file) uploadFile(file);
               }}
               className="text-white bg-primary rounded-full mt-5 p-2 w-32 hover:bg-primary-muted active:bg-primary active:scale-95 transition-all disabled:bg-slate-400 disabled:active:scale-100"
            >
               Upload
            </button>
         )}
      </>
   );
};

export default UploadForm;
