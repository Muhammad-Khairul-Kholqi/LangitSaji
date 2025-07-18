module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                playfair: ['var(--font-archivo)', 'sans-serif'],
            },
        },
    },
    plugins: [],
};