/** @type {import('tailwindcss').Config} */

module.exports = {
    mode: 'jit',
    content: [
        './src/**/*.{ts,jsx,tsx}'
    ],
    autoprefixer: {},
    theme: {
        extend: {
            colors: {
                brand: 'var(--color-brand)',
                brandLight: 'var(--color-brand-light)',
                heading: 'var(--color-heading)',
                heading2: 'var(--color-heading2)',
                secondary: 'var(--color-secondary)',
                white: 'var(--color-white)',
                yellow: 'var(--color-yellow)',
                blue: 'var(--color-blue)',
                darkBlue: 'var(--color-dark-blue)',
                midDarkBlue: 'var(--color-mid-dark-blue)',
            },
            fontFamily: {
                mulishLight: 'var(--mulish-light)',
                mulishMedium: 'var(--mulish-medium)',
                mulishBold: 'var(--mulish-bold)',
                latoLight: 'var(--lato-light)',
                latoMedium: 'var(--lato-medium)',
                latoBold: 'var(--lato-bold)'
            },
            borderRadius: {
                primary: 'var(--border-radius)'
            },
            boxShadow: {
                'shadow1': 'var(--shadow1)',
                'shadow2': 'var(--shadow2)'
            }
        }
    },
    plugins: []
};
