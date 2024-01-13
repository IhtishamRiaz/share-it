import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";
import { LuMenu } from "react-icons/lu";

const DashboardHeader = () => {
   return (
      <header className="flex items-center justify-between md:justify-end px-5 bg-white border-b h-[72px]">
         <LuMenu className="text-2xl md:hidden" />

         <Image
            src={"/logo.svg"}
            width={150}
            height={100}
            alt={"logo"}
            className="md:hidden"
         />

         <UserButton afterSignOutUrl="/" />
      </header>
   );
};

export default DashboardHeader;
