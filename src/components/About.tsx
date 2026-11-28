"use client";

import React from "react";
import { profileData } from "@/data/profile";
import { GraduationCap, Network, Code2, MapPin, Quote } from "lucide-react";

export default function About() {
  const factIcons = [
    <GraduationCap key="grad" className="w-4 h-4 text-blue-600 dark:text-blue-400" />,
    <Network key="net" className="w-4 h-4 text-blue-600 dark:text-blue-400" />,
    <Code2 key="code" className="w-4 h-4 text-blue-600 dark:text-blue-400" />,
    <MapPin key="pin" className="w-4 h-4 text-blue-600 dark:text-blue-400" />,
  ];

  return (
    <section
      id="about"
      className="py-24 bg-white/50 dark:bg-[#141820]/50 border-y border-[#e2e0d8] dark:border-[#1e2432] transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Column: Narrative */}
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-2">
              {"// about me"}
            </p>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-950 dark:text-slate-100 tracking-tight mb-6">
              Halo, aku {profileData.nickname}.
            </h2>

            <div className="space-y-4 text-slate-600 dark:text-slate-400 text-base leading-relaxed">
              {profileData.longBio.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Quote Block */}
            <div className="mt-8 p-4 rounded-xl border border-l-4 border-l-blue-600 border-[#e2e0d8] dark:border-[#1e2432] bg-blue-50/50 dark:bg-blue-950/20 flex items-start gap-3">
              <Quote className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
              <p className="font-mono text-xs italic text-slate-700 dark:text-slate-300">
                &ldquo;Kalau belum pernah gagal, berarti belum cukup mencoba.&rdquo;
              </p>
            </div>
          </div>

          {/* Right Column: Quick Facts Card */}
          <div>
            <div className="rounded-2xl border border-[#e2e0d8] dark:border-[#1e2432] bg-white dark:bg-[#0d0f14] p-6 sm:p-8 shadow-sm">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#e2e0d8] dark:border-[#1e2432]">
                <span className="font-mono text-xs tracking-widest text-blue-600 dark:text-blue-400 uppercase font-semibold">
                  {"// QUICK FACTS"}
                </span>
                <span className="font-mono text-[10px] text-slate-400">TJKT 2026</span>
              </div>

              <div className="space-y-6">
                {profileData.quickFacts.map((fact, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800/40 shrink-0 mt-0.5">
                      {factIcons[idx] || (
                        <div className="w-2 h-2 rounded-full bg-blue-600" />
                      )}
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-sm text-slate-900 dark:text-slate-100">
                        {fact.title}
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                        {fact.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
