"use client";

import { Moon, Sun } from "@gravity-ui/icons";
import { useTheme } from "next-themes";

export function ThemeSwitch() {
  const { theme, setTheme } = useTheme();

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`
        w-10 h-10 rounded-full flex items-center justify-center
        transition-all duration-300
        ${isDark ? "bg-white" : "bg-black"}
        shadow-md hover:scale-105 active:scale-95
      `}
    >
      {isDark ? (
        <Sun className="w-5 h-5 text-gray-700" />
      ) : (
        <Moon className="w-5 h-5 text-white" />
      )}
    </button>
  );
}