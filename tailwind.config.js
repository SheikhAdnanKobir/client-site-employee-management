/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./node_modules/flowbite/**/*.js", // Flowbite HTML components
        "./node_modules/flowbite-react/**/*.js", // Flowbite React components
    ],
    theme: {
        extend: {
            screens: {
                xs: '400px',
            },
        },
    },
    plugins: [
        require('flowbite/plugin'),
    ],
}
