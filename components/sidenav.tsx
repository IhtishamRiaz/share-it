"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { LuUpload, LuFile, LuShield } from "react-icons/lu";
import { IoClose } from "react-icons/io5";

const SideNav = ({
   isNavOpen,
   closeNav,
}: {
   isNavOpen: boolean;
   closeNav: () => void;
}) => {
   const location = usePathname();

   const navItems = [
      {
         id: 1,
         name: "Upload",
         href: "/upload",
         icon: LuUpload,
      },
      {
         id: 2,
         name: "Files",
         href: "/files",
         icon: LuFile,
      },
      {
         id: 3,
         name: "Upgrade",
         href: "/upgrade",
         icon: LuShield,
      },
   ];

   return (
      <nav
         className={cn(
            "md:block min-h-svh md:w-64 flex-col inset-y-0 fixed w-[50vw] z-50 border-r bg-white",
            {
               hidden: !isNavOpen,
            }
         )}
      >
         <div className="flex items-center justify-end md:justify-start pl-5 pr-2 border-b h-[72px]">
            <Link href={"/"}>
               <Image
                  src={"/logo.png"}
                  width={150}
                  height={100}
                  alt="logo"
                  className="hidden md:block"
               />
            </Link>
            <button
               className="md:hidden text-3xl active:scale-90 transition-all"
               onClick={closeNav}
            >
               <IoClose />
            </button>
         </div>
         <div>
            {navItems.map((item) => (
               <Link
                  key={item.id}
                  href={item.href}
                  onClick={closeNav}
                  className={cn(
                     "flex items-center gap-2 p-4 px-6 text-gray-500 text-lg hover:bg-slate-100 transition-all",
                     {
                        "bg-blue-50 hover:bg-blue-50 text-primary":
                           location === item.href,
                     }
                  )}
               >
                  <item.icon className="text-2xl" />
                  {item.name}
               </Link>
            ))}
         </div>
      </nav>
   );
};

export default SideNav;
