import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
   darkMode: "class",
   content: [
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
   ],
   theme: {
      screens: {
         xs: "400px",
         ...defaultTheme.screens,
      },
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
