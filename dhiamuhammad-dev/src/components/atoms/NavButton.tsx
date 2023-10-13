import Link from "next/link";

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

// src/components/atoms/ThemeSwitch.tsx
type ThemeSwitchProps = {
  isDarkMode: boolean;
  onToggle: () => void;
};

export const ThemeSwitch: React.FC<ThemeSwitchProps> = ({
  isDarkMode,
  onToggle,
}) => (
  <button onClick={onToggle}>{isDarkMode ? "Light Mode" : "Dark Mode"}</button>
);
