module.exports = {
  mode: "jit",
  purge: [],
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
