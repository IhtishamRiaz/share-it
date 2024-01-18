import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "sonner";

const inter = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
   title: "Share it",
   description:
      "ShareIt is a secure file-sharing web app, allowing users to effortlessly upload files to the cloud, set passwords, and share via links or email.",
};

export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <ClerkProvider>
         <html lang="en">
            <body className={cn("min-h-svh bg-slate-100", inter.className)}>
               {children}
               <Toaster richColors={true} position="top-right" />
            </body>
         </html>
      </ClerkProvider>
   );
}
