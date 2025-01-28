import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#fe5f00",
        boxShadow: {
          custom: "0 4px 4px 0 rgba(0, 0, 0, 0.05)",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
