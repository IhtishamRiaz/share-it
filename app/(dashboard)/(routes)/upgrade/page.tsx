import React from "react";

const Upgrade = () => {
   return (
      <section className="bg-white mt-10 mb-4 mx-4 rounded-lg shadow border">
         <h1 className="text-center text-4xl text-gray-900 font-bold pt-8">
            Our Pricing
         </h1>
         <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:items-center md:gap-8">
               <div className="rounded-2xl border border-primary p-6 shadow-sm ring-1 ring-primary order-last sm:px-8 lg:p-12">
                  <div className="text-center">
                     <h2 className="text-lg font-medium text-gray-900">
                        Pro
                        <span className="sr-only">Plan</span>
                     </h2>

                     <p className="mt-2 sm:mt-4">
                        <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">
                           {" "}
                           30${" "}
                        </strong>

                        <span className="text-sm font-medium text-gray-700">
                           /month
                        </span>
                     </p>
                  </div>

                  <ul className="mt-6 space-y-2">
                     <li className="flex items-center gap-1">
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           fill="none"
                           viewBox="0 0 24 24"
                           strokeWidth="1.5"
                           stroke="currentColor"
                           className="h-5 w-5 text-primary"
                        >
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M4.5 12.75l6 6 9-13.5"
                           />
                        </svg>
                        <span className="text-gray-700"> 5GB of storage </span>
                     </li>

                     <li className="flex items-center gap-1">
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           fill="none"
                           viewBox="0 0 24 24"
                           strokeWidth="1.5"
                           stroke="currentColor"
                           className="h-5 w-5 text-primary"
                        >
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M4.5 12.75l6 6 9-13.5"
                           />
                        </svg>

                        <span className="text-gray-700"> Email support </span>
                     </li>

                     <li className="flex items-center gap-1">
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           fill="none"
                           viewBox="0 0 24 24"
                           strokeWidth="1.5"
                           stroke="currentColor"
                           className="h-5 w-5 text-primary"
                        >
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M4.5 12.75l6 6 9-13.5"
                           />
                        </svg>

                        <span className="text-gray-700">
                           {" "}
                           Help center access{" "}
                        </span>
                     </li>

                     <li className="flex items-center gap-1">
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           fill="none"
                           viewBox="0 0 24 24"
                           strokeWidth="1.5"
                           stroke="currentColor"
                           className="h-5 w-5 text-primary"
                        >
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M4.5 12.75l6 6 9-13.5"
                           />
                        </svg>

                        <span className="text-gray-700"> Phone support </span>
                     </li>

                     <li className="flex items-center gap-1">
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           fill="none"
                           viewBox="0 0 24 24"
                           strokeWidth="1.5"
                           stroke="currentColor"
                           className="h-5 w-5 text-primary"
                        >
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M4.5 12.75l6 6 9-13.5"
                           />
                        </svg>

                        <span className="text-gray-700">
                           {" "}
                           Community access{" "}
                        </span>
                     </li>
                  </ul>

                  <a
                     href="#"
                     className="mt-8 block rounded-full border border-primary bg-primary px-12 py-3 text-center text-sm font-medium text-white hover:bg-primary hover:ring-1 hover:ring-primary focus:outline-none focus:ring"
                  >
                     Get Started
                  </a>
               </div>

               <div className="rounded-2xl border border-gray-200 p-6 shadow-sm sm:px-8 lg:p-12">
                  <div className="text-center">
                     <h2 className="text-lg font-medium text-gray-900">
                        Starter
                        <span className="sr-only">Plan</span>
                     </h2>

                     <p className="mt-2 sm:mt-4">
                        <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">
                           Free
                        </strong>
                     </p>
                  </div>

                  <ul className="mt-6 space-y-2">
                     <li className="flex items-center gap-1">
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           fill="none"
                           viewBox="0 0 24 24"
                           strokeWidth="1.5"
                           stroke="currentColor"
                           className="h-5 w-5 text-primary"
                        >
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M4.5 12.75l6 6 9-13.5"
                           />
                        </svg>

                        <span className="text-gray-700"> 2GB of storage </span>
                     </li>

                     <li className="flex items-center gap-1">
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           fill="none"
                           viewBox="0 0 24 24"
                           strokeWidth="1.5"
                           stroke="currentColor"
                           className="h-5 w-5 text-primary"
                        >
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M4.5 12.75l6 6 9-13.5"
                           />
                        </svg>

                        <span className="text-gray-700"> Email support </span>
                     </li>

                     <li className="flex items-center gap-1">
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           fill="none"
                           viewBox="0 0 24 24"
                           strokeWidth="1.5"
                           stroke="currentColor"
                           className="h-5 w-5 text-primary"
                        >
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M4.5 12.75l6 6 9-13.5"
                           />
                        </svg>

                        <span className="text-gray-700">
                           {" "}
                           Help center access{" "}
                        </span>
                     </li>
                  </ul>

                  <a
                     href="#"
                     className="mt-8 block rounded-full border border-primary bg-white px-12 py-3 text-center text-sm font-medium text-primary hover:ring-1 hover:ring-primary focus:outline-none focus:ring active:text-indigo-500"
                  >
                     Get Started
                  </a>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Upgrade;
