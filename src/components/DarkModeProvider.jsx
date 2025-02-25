import { create } from "zustand";
import { useEffect } from "react";

// Create Zustand store
const useDarkModeStore = create((set) => ({
    darkMode: localStorage.getItem("darkMode") === "dark",
    toggleDarkMode: () => set((state) => {
        const newMode = !state.darkMode;
        localStorage.setItem("darkMode", newMode ? "dark" : "light");
        return { darkMode: newMode };
    }),
}));

// Dark Mode Provider Component
export const DarkModeProvider = ({ children }) => {
    const darkMode = useDarkModeStore((state) => state.darkMode);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [darkMode]);

    return children;
};

// Custom Hook to Use Dark Mode
// eslint-disable-next-line
export const useDarkMode = () => useDarkModeStore();
