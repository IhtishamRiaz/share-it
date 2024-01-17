import { SignIn } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
   return (
      <section className="min-h-svh flex items-center justify-center px-4">
         <div className="flex flex-col items-center justify-center gap-6">
            <Link href={"/"}>
               <Image src={"/logo.png"} width={180} height={100} alt="logo" />
            </Link>
            <SignIn />
         </div>
      </section>
   );
}
