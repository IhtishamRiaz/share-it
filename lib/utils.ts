import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
   return twMerge(clsx(inputs));
}

export function generateRandomString() {
   return (
      Math.random().toString(36).substring(10, 15) +
      Math.random().toString(36).substring(10, 15)
   );
}
