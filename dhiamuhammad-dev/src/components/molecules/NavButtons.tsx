// src/components/molecules/NavButtons.tsx
import { NavButton } from "../atoms/NavButton";

type NavButtonsProps = {};

export const NavButtons: React.FC = () => (
  <div className="space-x-4">
    <NavButton label="Home" href="/" />
    <NavButton label="Projects" href="/Projects" />
    <NavButton label="Blog" href="/blog" />
    <NavButton label="Playground" href="/playground" />
  </div>
);
