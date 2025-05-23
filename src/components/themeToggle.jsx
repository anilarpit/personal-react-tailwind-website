import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
    const[isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme == "dark") {
            setIsDarkMode(true)
            document.documentElement.classList.add("dark");
        }
    }, []);

    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
            window.dispatchEvent(new Event("themeChange"));
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);
            window.dispatchEvent(new Event("themeChange"));
        }
    };
    return (
        <button onClick={toggleTheme} className={cn("fixed max-sm:right-20 max-sm:top-5 top-4 right-1 z-50 p-2 rounded-full",
            "transition-colors duration-300 focus:outline-hidden"
        )}> 
            {isDarkMode ? (
                <Sun className="h-6 w-6 text-yellow-300" />
            ): (
                <Moon className="h-6 w-6 text-blue-900" /> 
            )}
        </button>
    );
};