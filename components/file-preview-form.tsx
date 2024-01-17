"use client";
import { type fileInfo } from "@/lib/types";
import React, { useEffect, useState } from "react";
import { LuCopy } from "react-icons/lu";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { FaCheck } from "react-icons/fa6";
import { cn } from "@/lib/utils";
import { useUser } from "@clerk/nextjs";
import sendEmail from "@/lib/emailApi";
import { toast } from "sonner";

type Props = {
   fileInfo: fileInfo;
   addPassword: (password: string) => void;
};
const FilePreviewForm = ({ fileInfo, addPassword }: Props) => {
   const [password, setPassword] = useState("");
   const [showPassword, setShowPassword] = useState(false);
   const [isPasswordEnabled, setIsPasswordEnabled] = useState(false);
   const [isCopied, setIsCopied] = useState(false);
   const [email, setEmail] = useState("");
   const { user } = useUser();

   const handleCopyLink = () => {
      setIsCopied(true);
      toast.success("Copied Link");
      navigator.clipboard.writeText(fileInfo?.shortUrl);

      setTimeout(() => {
         setIsCopied(false);
      }, 2000);
   };

   useEffect(() => {
      setPassword(fileInfo?.password);
      setIsPasswordEnabled(fileInfo?.password ? true : false);
   }, [fileInfo?.password]);

   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();

      sendEmail({
         emailToSend: email,
         shortUrl: fileInfo?.shortUrl,
         userName: user?.primaryEmailAddress?.emailAddress || "",
         fileName: fileInfo?.fileName,
         fileType: fileInfo?.fileType,
         fileSize: fileInfo?.fileSize,
      });
   };

   return (
      <div className="border shadow-sm rounded-md basis-1/2 bg-white pt-3 pb-6 px-4">
         <div className="text-gray-400 space-y-1">
            <p>Short Url</p>
            <div className="border rounded-md flex items-center justify-between h-10 px-2 overflow-hidden relative">
               <p className="text-gray-500" id="short-url">
                  {fileInfo?.shortUrl}
               </p>
               <button
                  onClick={handleCopyLink}
                  className="absolute top-1/2 -translate-y-1/2 right-0 bg-white p-2"
               >
                  {isCopied ? (
                     <FaCheck className="text-lg text-green-600" />
                  ) : (
                     <LuCopy className="text-xl active:scale-[85%] transition-all" />
                  )}
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
            <div className="flex flex-col xs:flex-row items-start xs:items-center justify-between gap-2">
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
                  className="text-white bg-primary w-full xs:w-auto rounded-md py-2 px-4 hover:bg-primary-muted active:bg-primary active:scale-95 transition-all disabled:bg-slate-400 disabled:active:scale-100"
               >
                  Save
               </button>
            </div>
         </div>

         <div className="mt-8 space-y-2">
            <p className="text-gray-400">Send File on Email</p>
            <form onSubmit={handleSubmit} className="space-y-3">
               <input
                  type="email"
                  required
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border rounded-md flex items-center justify-between h-10 px-2 outline-none w-full"
               />
               <button
                  type="submit"
                  className="text-white bg-primary w-full rounded-md py-2 px-4 hover:bg-primary-muted active:bg-primary active:scale-95 transition-all"
               >
                  Send Email
               </button>
            </form>
         </div>
      </div>
   );
};

export default FilePreviewForm;
