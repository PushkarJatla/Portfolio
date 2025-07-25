import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

useEffect(() => {
  const storedTheme = localStorage.getItem("theme");

  if (storedTheme === "dark" || storedTheme === null) {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    setIsDarkMode(true);
  } else {
    document.documentElement.classList.remove("dark");
    setIsDarkMode(false);
  }
}, []);


  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
  <button
  onClick={toggleTheme}
  className={cn(
    "fixed top-4 z-50 p-2 rounded-full transition-colors duration-300 focus:outline-none",
    "left-1/2 transform -translate-x-1/2 sm:left-auto sm:translate-x-0 sm:top-5 sm:right-5"
  )}
>
  {isDarkMode ? (
    <Sun className="h-6 w-6 text-yellow-300" />
  ) : (
    <Moon className="h-6 w-6 text-blue-900" />
  )}
</button>

  );
};
