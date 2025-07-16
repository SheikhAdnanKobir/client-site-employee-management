/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            screens: {
                'xs': '400px',
                'mp': '1000px'
            },
        },
    },
    plugins: [
        require('flowbite/plugin'),
    ],
}
