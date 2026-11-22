"use client";

import React, { useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import { profileData } from "@/data/profile";
import { Moon, Sun, Menu, X, Terminal } from "lucide-react";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "home", href: "#hero" },
    { label: "about", href: "#about" },
    { label: "skills", href: "#skills" },
    { label: "projects", href: "#projects" },
    { label: "terminal", href: "#terminal" },
    { label: "contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#f4f1eb]/85 dark:bg-[#0d0f14]/85 border-b border-[#e2e0d8] dark:border-[#1e2432] transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#hero"
          className="flex items-center gap-2 group text-decoration-none"
        >
          <div className="w-8 h-8 rounded-lg bg-blue-600/10 dark:bg-blue-500/10 border border-blue-600/20 dark:border-blue-500/30 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-105 transition-transform">
            <Terminal className="w-4 h-4" />
          </div>
          <span className="font-mono text-sm font-bold tracking-wider text-blue-600 dark:text-blue-400">
            {profileData.brand}
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="flex items-center gap-6">
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-mono text-xs tracking-wider text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-blue-600 dark:after:bg-blue-400 hover:after:w-full after:transition-all"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="flex items-center gap-2 font-mono text-xs px-3 py-1.5 rounded-full border border-[#e2e0d8] dark:border-[#1e2432] bg-white/60 dark:bg-[#141820]/60 text-slate-600 dark:text-slate-300 hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all cursor-pointer shadow-xs"
          >
            {theme === "dark" ? (
              <>
                <Sun className="w-3.5 h-3.5 text-amber-400" />
                <span>light</span>
              </>
            ) : (
              <>
                <Moon className="w-3.5 h-3.5 text-blue-600" />
                <span>dark</span>
              </>
            )}
          </button>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg border border-[#e2e0d8] dark:border-[#1e2432] text-slate-700 dark:text-slate-200 cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#e2e0d8] dark:border-[#1e2432] bg-[#f4f1eb] dark:bg-[#0d0f14] px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block font-mono text-sm py-2 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 border-b border-[#e2e0d8]/50 dark:border-[#1e2432]/50 last:border-b-0"
            >
              // {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
