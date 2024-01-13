import type { Config } from "tailwindcss";

const config: Config = {
   darkMode: "class",
   content: [
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
   ],
   theme: {
      extend: {
         colors: {
            primary: "hsl(var(--primary))",
            "primary-muted": "hsl(var(--primary-muted))",
         },
      },
   },
   plugins: [],
};
export default config;
