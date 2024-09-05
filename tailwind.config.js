/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        'pale-blue': 'hsla(var(--primary-pale-blue))',
        'bright-blue': 'hsla(var(--primary-bright-blue))',
        'very-pale-blue': 'hsla(var(--neutral-very-pale-blue))',
        'desaturated-blue': 'hsla(var(--neutral-desaturated-blue))',
        'dark-blue': 'hsla(var(--neutral-dark-blue))',
      },
      background: { 
        'pattern-desktop': "url('./images/pattern-background-desktop.svg')",
        'pattern-mobile': "url('./images/pattern-background-mobile.svg')"
      },
      boxShadow: {
        'button': '0px 70px 100px -32px hsl(245, 75%, 52%)',
      },
      fontFamily: {
        sans: ['Red Hat Display', 'sans-serif'],
      },
    },
  },
  plugins: [],
}