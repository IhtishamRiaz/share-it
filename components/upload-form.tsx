import React, { useState } from "react";
import AlertMsg from "./alert-msg";
import FilePreview from "./file-preview";
import ProgressBar from "./progress-bar";
import { useDropzone } from "react-dropzone";
import Dropzone from "./dropzone";

interface UploadFormProps {
   progress: number;
   uploadFile: (file: File) => void;
}

const UploadForm = ({ progress, uploadFile }: UploadFormProps) => {
   const [file, setFile] = useState<File>();
   const [errorMsg, setErrorMsg] = useState<string>();

   const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files[0].size < 2000000) {
         setFile(e.target.files[0]);
         setErrorMsg("");
      } else {
         setErrorMsg("Maximum File Upload Size is 2MB");
      }
   };
   return (
      <>
         <Dropzone setFile={setFile} />

         {errorMsg && <AlertMsg msg={errorMsg} />}

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
