/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
        fontFamily: {
            title: ["Alice", "serif"],
            body: ["Changa", "sans-serif"],
        },
    },
    plugins: [],
};
