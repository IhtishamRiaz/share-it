import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { LuMenu } from "react-icons/lu";

const DashboardHeader = ({ openNav }: { openNav: () => void }) => {
   return (
      <header className="flex items-center justify-between md:justify-end px-5 bg-white border-b h-[72px]">
         <button
            className="text-2xl md:hidden active:scale-90 transition-all"
            onClick={openNav}
         >
            <LuMenu />
         </button>

         <Link href={"/"}>
            <Image
               src={"/logo.png"}
               width={150}
               height={100}
               alt={"logo"}
               className="md:hidden"
            />
         </Link>

         <UserButton afterSignOutUrl="/" />
      </header>
   );
};

export default DashboardHeader;
