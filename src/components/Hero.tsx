"use client";

import React, { useState } from "react";
import { profileData } from "@/data/profile";
import { ArrowRight, Mail, Check, Sparkles, Network, Code, Server } from "lucide-react";

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="hero"
      className="min-h-screen pt-28 pb-20 flex flex-col justify-center relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 w-full relative z-10">
        {/* Class Badge & Year */}
        <div className="inline-flex items-center gap-2 mb-6">
          <span className="font-mono text-xs tracking-widest text-slate-500 dark:text-slate-400 uppercase">
            // {profileData.classInfo} · {profileData.school} · 2026
          </span>
        </div>

        {/* Big Name Typography */}
        <div className="mb-6">
          <h1 className="font-display font-extrabold text-5xl sm:text-7xl md:text-8xl tracking-tight leading-[0.95] text-slate-950 dark:text-slate-100">
            Rahmat
          </h1>
          <h1 className="font-display font-extrabold text-5xl sm:text-7xl md:text-8xl tracking-tight leading-[0.95] text-slate-950 dark:text-slate-100">
            Taufik
          </h1>
          <h1 className="font-display font-extrabold text-5xl sm:text-7xl md:text-8xl tracking-tight leading-[0.95] text-blue-600 dark:text-blue-400">
            Akbar<span className="text-slate-950 dark:text-slate-100">.</span>
          </h1>
        </div>

        {/* Subtitle & Description */}
        <p className="max-w-xl text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
          {profileData.shortBio}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center gap-4 mb-12">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 font-mono text-xs tracking-wider px-6 py-3 rounded-full bg-slate-900 text-slate-100 hover:bg-blue-600 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-blue-500 dark:hover:text-white transition-all transform hover:scale-[1.02] shadow-sm font-semibold"
          >
            <span>Lihat Projects</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 font-mono text-xs tracking-wider px-6 py-3 rounded-full border border-[#e2e0d8] dark:border-[#1e2432] text-slate-800 dark:text-slate-200 hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all transform hover:scale-[1.02] bg-white/40 dark:bg-[#141820]/40"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Hubungi Saya</span>
          </a>

          <button
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-2 font-mono text-xs tracking-wider px-4 py-3 rounded-full border border-dashed border-[#e2e0d8] dark:border-[#1e2432] text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 transition-colors cursor-pointer"
            title="Klik untuk salin email"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-500" />
                <span className="text-emerald-500">Email Tersalin!</span>
              </>
            ) : (
              <>
                <span className="text-slate-400">copy email</span>
              </>
            )}
          </button>
        </div>

        {/* Status Badge & Quick Stats Strip */}
        <div className="pt-6 border-t border-[#e2e0d8] dark:border-[#1e2432] flex flex-wrap items-center justify-between gap-6">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#e2e0d8] dark:border-[#1e2432] bg-white/60 dark:bg-[#141820]/60 font-mono text-xs text-slate-600 dark:text-slate-300">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="tracking-wider">{profileData.status}</span>
          </div>

          <div className="flex items-center gap-6 sm:gap-10">
            {profileData.stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="font-display font-bold text-lg text-slate-900 dark:text-slate-100">
                  {stat.value}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
