import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
   return (
      <nav className="bg-white border-b shadow-sm z-30">
         <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
            <a className="block text-primary" href="/">
               <span className="sr-only">Home</span>
               <Image src="/logo.svg" width={150} height={100} alt="logo" />
            </a>

            <div className="flex flex-1 items-center justify-end md:justify-between">
               <nav aria-label="Global" className="hidden md:block">
                  <ul className="flex items-center gap-6 text-sm">
                     <li>
                        <a
                           className="text-gray-500 transition hover:text-gray-500/75"
                           href="/"
                        >
                           Abouts
                        </a>
                     </li>

                     <li>
                        <a
                           className="text-gray-500 transition hover:text-gray-500/75"
                           href="/"
                        >
                           {" "}
                           Blog{" "}
                        </a>
                     </li>
                  </ul>
               </nav>

               <div className="flex items-center gap-4">
                  <div className="sm:flex sm:gap-4 hidden">
                     <Link
                        className="block rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-primary-muted active:bg-primary active:scale-95"
                        href="/files"
                     >
                        Get Started
                     </Link>
                  </div>

                  <button className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
                     <span className="sr-only">Toggle menu</span>
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                     >
                        <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           d="M4 6h16M4 12h16M4 18h16"
                        />
                     </svg>
                  </button>
               </div>
            </div>
         </div>
      </nav>
   );
};

export default Navbar;
