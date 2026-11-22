"use client";

import React from "react";
import { profileData } from "@/data/profile";
import { ArrowUp, Terminal, Heart } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 border-t border-[#e2e0d8] dark:border-[#1e2432] bg-[#f4f1eb] dark:bg-[#0d0f14] transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded bg-blue-600/10 dark:bg-blue-500/10 border border-blue-600/20 dark:border-blue-500/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
            <Terminal className="w-3.5 h-3.5" />
          </div>
          <span className="font-mono text-xs text-slate-500 dark:text-slate-400 tracking-wider">
            © 2026 {profileData.name.toUpperCase()} · BUILT WITH NEXT.JS & TAILWIND
          </span>
        </div>

        <div className="flex items-center gap-6">
          <span className="font-mono text-[11px] text-slate-400 dark:text-slate-500">
            SMKN 3 Banjarmasin · TJKT
          </span>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 font-mono text-xs px-3 py-1.5 rounded-full border border-[#e2e0d8] dark:border-[#1e2432] bg-white dark:bg-[#141820] text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-600 dark:hover:border-blue-400 transition-colors cursor-pointer shadow-xs"
            title="Kembali ke atas"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>top</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
