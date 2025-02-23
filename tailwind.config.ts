import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        secondary: "var(--secondary)",
        accent: "var(--accent)",
      },
      fontFamily: {
        mar: "var(--font-markazi)",
        out: "var(--font-outfit)",
        pet: "var(--font-petrona)",
        aleo: "var(--font-aleo)",
        any: "var(--font-anybody)",
      },
      backgroundImage: {
        "custom-radial": "radial-gradient(circle, #420B03 0%, #000000 100%)",
      },
    },
  },
  plugins: [],
} satisfies Config;
