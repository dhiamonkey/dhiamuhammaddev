"use client";
import React, { useState } from "react";
import { NavButtons } from "../molecules/NavButtons";
import { ThemeSwitch } from "../atoms/NavButton";

const NavBar: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  //   const handleNavigation = (section: string) => {
  //     switch (section) {
  //       case "home":
  //         router.push("/"); // Navigate to home page
  //         break;
  //       case "projects":
  //         router.push("/projects"); // Navigate to projects page
  //         break;
  //     }
  //   };

  return (
    <nav className="flex space-x-2 justify-center my-4  w-full">
      <div className="container flex justify-between items-center mx-4">
        <NavButtons />
        <ThemeSwitch isDarkMode={isDarkMode} onToggle={handleThemeToggle} />
      </div>
    </nav>
  );
};

export default NavBar;
