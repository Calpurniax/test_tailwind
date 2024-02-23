/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        "screen/9": "90vh",
        "screen/8": "80vh",
        "screen/2": "50vh",
        "screen/3": "calc(100vh / 3)",
        "screen/4": "calc(100vh / 4)",
        "screen/5": "calc(100vh / 5)",
      },
      width: {
        "screen/2":"50vw",
        "screen/3":"40vw",  
      },
      screens:{
        minScreen:{max:"1023px"},
        medScreen:{max:"1279px"},
        '3xl':'1600px',
        '4xl':'1920px',
        '5xl':'2560px'
      },
      keyframes:{
        slidein:{
          from:{
            opacity:"0",
            transform: "translateY(-10px)"
          },
          to:{
            opacity:"1",
            transform: "translateY(0)",
          },
        },
      },
      animation:{
        slidein300: "slidein 1s ease 300ms forwards",
        slidein900: "slidein 1s ease 900ms forwards"
      }
    },
  },
  variants: { display: ["responsive", "hover", "focus"] },
  plugins: [require("tw-elements-react/dist/plugin.cjs")],
}
