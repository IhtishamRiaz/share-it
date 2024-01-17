import Link from "next/link";

export default function Hero() {
   return (
      <section className="bg-gray-50">
         <div className="mx-auto max-w-screen-xl px-4 py-32 flex h-screen items-center">
            <div className="mx-auto max-w-xl text-center">
               <h1 className="text-3xl font-extrabold sm:text-5xl">
                  <span className="text-primary">Upload, Save</span> and easily
                  <span className="text-primary"> Share</span> your files.
               </h1>

               <p className="mt-4 sm:text-xl text-slate-500">
                  Drag and drop your files directly on our cloud and share it
                  with your friends and colleagues secuarely with password and
                  send it on email.
               </p>

               <div className="mt-8 flex flex-wrap justify-center gap-4">
                  <Link
                     className="block w-full rounded bg-primary px-12 py-3 font-medium text-white shadow hover:bg-primary-muted active:bg-primary active:scale-95 sm:w-auto transition-all"
                     href="/upload"
                  >
                     Get Started
                  </Link>

                  <a
                     className="block w-full bg-slate-200 rounded px-12 py-3 font-semibold text-primary shadow-sm hover:bg-slate-300 active:bg-slate-200 active:scale-95 sm:w-auto transition-all"
                     href="#"
                  >
                     Learn More
                  </a>
               </div>
            </div>
         </div>
      </section>
   );
}
