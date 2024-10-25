import type { Config } from "tailwindcss";

// We want each package to be responsible for its own content.
const config: Config = {
  // const config: Omit<Config, 'content'> = {
  content: [
    "./apps/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",

    "../**/*.{ts,tsx}",
    "../checkout/pages/**/*.{ts,tsx}",
  ],
  theme: {
    // shared theme configuration. EX:
    // extend: {
    //   colors: {
    //     background: "var(--background)",
    //     foreground: "var(--foreground)",
    //   },
    // }
  },
  plugins: [],
};
export default config;
