"use client";
import { type fileInfo } from "@/lib/types";
import React, { useEffect, useState } from "react";
import { LuCopy } from "react-icons/lu";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { cn } from "@/lib/utils";

type Props = {
   fileInfo: fileInfo;
   addPassword: (password: string) => void;
};
const FilePreviewForm = ({ fileInfo, addPassword }: Props) => {
   const [password, setPassword] = useState("");
   const [showPassword, setShowPassword] = useState(false);
   const [isPasswordEnabled, setIsPasswordEnabled] = useState(false);
   const [email, setEmail] = useState("");

   const copyLink = () => {
      navigator.clipboard.writeText(fileInfo?.shortUrl);

      const textToSelect = document.getElementById("short-url");
      if (!textToSelect) return;

      const range = document.createRange();
      range.selectNode(textToSelect);

      const selection = window.getSelection();
      selection?.removeAllRanges();
      selection?.addRange(range);
   };

   useEffect(() => {
      setPassword(fileInfo?.password);
      setIsPasswordEnabled(fileInfo?.password ? true : false);
   }, [fileInfo?.password]);

   return (
      <div className="border shadow-sm rounded-md basis-1/2 bg-white pt-3 pb-6 px-4">
         <div className="text-gray-400 space-y-1">
            <p>Short Url</p>
            <div className="border rounded-md flex items-center justify-between h-10 px-2">
               <p className="text-gray-500" id="short-url">
                  {fileInfo?.shortUrl}
               </p>
               <button onClick={copyLink}>
                  <LuCopy className="text-xl active:scale-[85%] transition-all" />
               </button>
            </div>
         </div>

         <div className="mt-8 space-y-2">
            <label className="cursor-pointer">
               <input
                  type="checkbox"
                  onChange={(e) => setIsPasswordEnabled(e.target.checked)}
               />
               <span className="ml-2 font-medium">Enable Password?</span>
            </label>
            <div className="flex items-center justify-between gap-2">
               <div className="relative w-full">
                  <input
                     type={showPassword ? "text" : "password"}
                     value={password}
                     disabled={!isPasswordEnabled}
                     onChange={(e) => setPassword(e.target.value)}
                     className="border rounded-md flex items-center justify-between h-10 px-2 outline-none w-full"
                  />
                  <button
                     onClick={() => setShowPassword(!showPassword)}
                     className={cn(
                        "text-primary text-2xl absolute top-1/2 -translate-y-1/2 right-3 transition-all",
                        {
                           "pointer-events-none text-slate-400":
                              !isPasswordEnabled,
                        }
                     )}
                  >
                     {showPassword ? <IoMdEyeOff /> : <IoMdEye />}
                  </button>
               </div>
               <button
                  disabled={!isPasswordEnabled}
                  onClick={() => addPassword(password)}
                  className="text-white bg-primary rounded-md py-2 px-4 hover:bg-primary-muted active:bg-primary active:scale-95 transition-all disabled:bg-slate-400 disabled:active:scale-100"
               >
                  Save
               </button>
            </div>
         </div>

         <div className="mt-8 space-y-2">
            <p className="text-gray-400">Send File on Email</p>
            <input
               type="email"
               value={email}
               placeholder="Enter Email"
               onChange={(e) => setEmail(e.target.value)}
               className="border rounded-md flex items-center justify-between h-10 px-2 outline-none w-full"
            />
            <button className="text-white bg-primary w-full rounded-md py-2 px-4 hover:bg-primary-muted active:bg-primary active:scale-95 transition-all">
               Send Email
            </button>
         </div>
      </div>
   );
};

export default FilePreviewForm;
