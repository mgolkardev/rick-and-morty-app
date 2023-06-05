/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./modules/**/*.{js,ts,jsx,tsx,mdx}",
    "./modules/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./modules/views/**/*.{js,ts,jsx,tsx,mdx}",
    "./common/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    minWidth: {
      mobile: "375px",
      medium: "60px",
    },
    width: {
      medium: "10px",
      large: "24px",
      xlarge: "48px",
    },
    height: {
      medium: "10px",
      large: "24px",
      xlarge: "48px",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
