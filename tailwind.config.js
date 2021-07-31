module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins', 'Sans-serif']
      },       
      colors:{
        "yellow":{
          "0": "#FFE194"
        },
        "dark":{
          "0":"#221E2B"
        },
        "green":{
          "0":"#F0F2ED",
          "100":"#758963",
          "200":"#43582A",   
          "300":"#16C60C"       
        },
        "coco":{
          "0":"#BDB5A4",
          "100":"#B36D4B",
          "200":"#FFE194",
        
        }

      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
  
}
