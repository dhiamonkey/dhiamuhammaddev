"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";

// src/components/atoms/NavButton.tsx
type NavButtonProps = {
  label: string;
  href: string;
};

export const NavButton: React.FC<NavButtonProps> = ({ label, href }) => (
  <Link href={href} legacyBehavior>
    <a className="text-gray-700 font-medium hover:text-gray-900 transition">
      {label}
    </a>
  </Link>
);

type ThemeSwitchProps = {
  isDarkMode: boolean;
};

export const ThemeSwitch: React.FC<ThemeSwitchProps> = ({ isDarkMode }) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const handleToggleTheme = () => {
    // Toggle the theme based on the current theme
    setTheme(theme === "light" ? "dark" : "light");
    console.log(theme);
  };

  return <button onClick={handleToggleTheme}> {theme} mode</button>;
};
