module.exports = {
      mode: "jit",
      purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
      darkMode: false, // or 'media' or 'class'
      theme: {
            extend: {
                  colors: {
                        coolSlate: '#f4f5f5',
                        green: '#96D294',
                        magenta: '#a7004c',
                        pink: '#e10044',
                        yellow: '#f0ce41',
                        purple: '#5a1d57',
                        orange: '#ff5a00'
                  },
                  height: {
                        '120': '30rem',
                        '150': '40rem',
                        '200': '50rem'
                  },
                  width: {
                        '120': '30rem',
                        '150': '40rem',
                        '200': '50rem'
                  },
            },
            fontFamily: {
                  logo: ["Archivo"],
                  fontTwo: ["Open Sans"],
                  fontThree: ["Poppins"]
            }
      },
      variants: {
            extend: {},
      },
      plugins: [],
}