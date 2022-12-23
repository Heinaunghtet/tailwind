/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                primary: '#50C878',
                secondary: {
                    100: '#D2E8EC',
                    200: '#D2E8EC',
                }
            },
            fontFamily: {
                body: ['Nunito'],
            }
        },
    },
    plugins: [],
}