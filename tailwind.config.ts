import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        default: '#434343',
        primary: '#00a8e8',
        dark: '#000000',
        darkSecondary: '#1c1c1c',
        // darkSecondary: '#060606',
        light: '#fff',
        secondary: '#e9e9e9',
        icon: '#5f5f5f',
      }
    },
    screens: {
      xs: '480px',
      ss: '620px',
      sm: '768px',
      md: '1060px',
      lg: '1200px',
      xl: '1700px',
    },
  },
  plugins: [],
};
export default config;