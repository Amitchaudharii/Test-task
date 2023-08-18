/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        heroBg: "url('/images/hero/heroBg.svg')",
        whatGetBg: "url('/images/whatGet/whatgetBg.svg')",
        ourProcess: "url('/images/ourProcess/ourProcessBg.svg')",
        workingBg: "url('/images/working/workingBg.svg')",
      }),
    },
  },
  plugins: [],
};
