module.exports = {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors:{
        "custom-green":"#02B290"
      
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
}