module.exports = {
  mode: "jit",
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  content: [
    
  ],
  theme: {
    extend: {
      backgroundImage:{
        'background-pattern': "url('/public/Form-bg.svg')"
      },
    },
  },
  plugins: [],
}
