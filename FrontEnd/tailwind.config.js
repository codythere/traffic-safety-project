/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      spacing: {
        35: "35%",
        100: "100%",
      },
      colors: {
        primary: "#F43F5E",
        dimblack: "#0F172A",
        dimgray: "#94A3B8",
        dimyellow: "#F6BE2C",
        maskblack: "#565b69",
      },
      fontFamily: {
        poppins: ["Noto Sans TC", "Roboto", "sans-serif"],
      },
    },
    screens: {
      xs: "640px",
      ss: "940px",
      sm: "1020px",
      md: "1080px",
      lg: "1530px",
      xl: "1840px",
    },
    backgroundImage: {
      //以下設定為參考，目前專案中沒有使用
      "bg-main": "url('/src/assets/mainbg.jpg')",
      "hero-pattern": "url('/src/assets/mainbg.png')",
      "zebras-pattern":
        "url('https://test-for-aws-course-only.s3.ap-southeast-2.amazonaws.com/hero.png')",
      "sub-hero-pattern": "url('/src/assets/subbg.png')",
      "footer-pattern": "url('/src/assets/footerbg.png')",
    },
  },
  plugins: [],
};
