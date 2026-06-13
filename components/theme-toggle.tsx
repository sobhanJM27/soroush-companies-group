"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { IconWrapper } from "@/components/ui/icon-wrapper";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <IconWrapper variant="ghost" size="md" onClick={toggleTheme}>
      {theme === "dark" ? <Sun /> : <Moon />}
    </IconWrapper>
  );
}
