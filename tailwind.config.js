module.exports = {
    mode: "jit",
    content: ["./src/Pages/**/*.{js,ts,jsx,tsx}","./src/Pages/**/**/*.{js,ts,jsx,tsx}", "./src/Components/**/*.{js,ts,jsx,tsx}", "./src/Layouts/*.{js,ts,jsx,tsx}"],
    darkMode: "none", // or 'media' or 'class'
    theme: {
        extend: {
            colors: {},
            fontFamily: {
                body: ["Roboto"],
                openSans: ['"Open Sans"', "sans-serif"],
                roboto: ["Roboto", "sans-serif"],
                lato: ["Lato", "sans-serif"],
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        require("postcss-import"),
        require("tailwindcss"),
        require("autoprefixer"),
    ],
};
