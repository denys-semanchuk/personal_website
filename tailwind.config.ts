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
        primary: {
          DEFAULT: 'var(--primary)',
          light: 'var(--primary-light)',
          dark: 'var(--primary-dark)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          light: 'var(--accent-light)',
        },
        text: {
          DEFAULT: 'var(--text)',
          light: 'var(--text-light)',
        },
        background: 'var(--background)',
        foreground: "var(--foreground)",
        'card-bg': 'var(--card-bg)',
      },
    },
  },
  plugins: [],
} satisfies Config;
