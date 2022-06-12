module.exports = {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.{js,jsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}