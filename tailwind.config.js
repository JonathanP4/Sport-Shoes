/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./app/**/*.{tsx,ts,js,jsx}"],
    theme: {
        extend: {
            colors: {
                "Neutral-20": "#F6F6F6",
                "Neutral-40": "#E3E3E3",
                "Neutral-50": "#C6C6C6",
                "Neutral-80": "#6C6C6C",
                "Neutral-90": "#4D4D4D",
                Orange: "#F26522",
            },
        },
        fontFamily: {
            BebasNeue: "BebasNeue",
            AsapRegular: "AsapRegular",
            AsapBold: "AsapBold",
        },
    },
    plugins: [],
};
