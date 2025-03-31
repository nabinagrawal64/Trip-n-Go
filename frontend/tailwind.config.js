/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class", // Enables class-based dark mode
    theme: {
        extend: {
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
            },
            screens: {
                'xs': '375px',  // Custom Extra Small Devices
                '2xs': '320px', // Super Small Devices (e.g., very small phones)
                '3xs': '160px', // Large Desktop Screens
            },
            keyframes: {
                scrollX: {
                  "0%": { transform: "translateX(0%)" },
                  "100%": { transform: "translateX(-100%)" }  // Move leftwards
                },
                scrollY: {
                  "0%": { transform: "translateY(0%)" },
                  "100%": { transform: "translateY(-100%)" }  // Move upwards
                },
              },
              animation: {
                scrollX: "scrollX var(--duration) linear infinite",
                scroll
              }
        },
    },
};
