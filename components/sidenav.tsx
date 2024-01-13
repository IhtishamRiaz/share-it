"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { LuUpload, LuFile, LuShield } from "react-icons/lu";

const SideNav = () => {
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
      <nav className="hidden md:block h-full md:w-64 flex-col fixed inset-y-0 z-50 border-r bg-white">
         <div className="flex items-center px-5 border-b h-[72px]">
            <Image src={"/logo.svg"} width={150} height={100} alt="logo" />
         </div>
         <div>
            {navItems.map((item) => (
               <Link
                  key={item.id}
                  href={item.href}
                  className={cn(
                     "flex items-center gap-2 p-4 px-6 text-gray-500 text-xl hover:bg-slate-100 transition-all",
                     {
                        "bg-blue-50 hover:bg-blue-50 text-primary":
                           location === item.href,
                     }
                  )}
               >
                  <item.icon />
                  {item.name}
               </Link>
            ))}
         </div>
      </nav>
   );
};

export default SideNav;
