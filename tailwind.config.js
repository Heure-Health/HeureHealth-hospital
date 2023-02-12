module.exports = {
    mode: "jit",
    content: ["./src/pages/**/*.{js,ts,jsx,tsx}","./src/pages/**/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}", "./src/layouts/*.{js,ts,jsx,tsx}"],
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
