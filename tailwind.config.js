/** @type {import('tailwindcss').Config} */

module.exports = {
    mode: 'jit',
    content: [
        './src/**/*.{js,ts,jsx,tsx}'
    ],
    autoprefixer: {},
    theme: {
        extend: {
            colors: {
                brand: '#33d9ff',
                brandLight: '#edfafd',
                secondary: '#222d30',
                white: '#fff'
            },
            fontFamily: {
                mulishLight: '\'Mulish-Light\', arial, helvetica, sans-serif',
                mulishMedium: '\'Mulish-Medium\', arial, helvetica, sans-serif',
                mulishBold: '\'Mulish-Bold\', arial, helvetica, sans-serif',
                latoLight: '\'Lato-Light\', arial, helvetica, sans-serif',
                latoMedium: '\'Lato-Medium\', arial, helvetica, sans-serif',
                latoBold: '\'Lato-Bold\', arial, helvetica, sans-serif'
            },
            borderRadius: {
                primary: '2.5rem'
            },
            boxShadow: {
                'shadow1': '0.4rem 0.4rem 2.4rem rgba(142, 142, 142, 0.25)'
            }
        }
    },
    plugins: []
};
