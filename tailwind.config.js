module.exports = {
  mode: "jit",
  content: [
    './pages/**/*.{js,ts,jsx,tsx}'
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
