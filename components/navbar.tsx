import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
   return (
      <nav className="bg-white py-3 border-b shadow-sm z-30 fixed top-0 inset-x-0">
         <div className="mx-auto flex h-16 max-w-screen-xl items-center justify-center sm:justify-between gap-8 px-4 sm:px-6 lg:px-8">
            <a className="block text-primary" href="/">
               <span className="sr-only">Home</span>
               <Image src="/logo.png" width={150} height={100} alt="logo" />
            </a>

            <div className="sm:flex sm:gap-4 hidden">
               <Link
                  className="block rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-primary-muted active:bg-primary active:scale-95"
                  href="/upload"
               >
                  Get Started
               </Link>
            </div>
         </div>
      </nav>
   );
};

export default Navbar;
