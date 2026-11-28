"use client";

import React from "react";
import { skillsData } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="font-mono text-xs uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-2">
            {"// technical skills"}
          </p>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-950 dark:text-slate-100 tracking-tight">
            Yang Bisa Aku Lakukan
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-3">
            Kombinasi keahlian infrastruktur jaringan komputer praktis di SMK dan software engineering otodidak.
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsData.map((category, idx) => (
            <div
              key={idx}
              className="group p-6 rounded-2xl border border-[#e2e0d8] dark:border-[#1e2432] bg-white dark:bg-[#141820] hover:shadow-xl hover:border-blue-500/50 dark:hover:border-blue-500/50 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform inline-block">
                  {category.icon}
                </div>
                <h3 className="font-display font-bold text-lg text-slate-900 dark:text-slate-100 mb-2">
                  {category.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
                  {category.description}
                </p>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#e2e0d8]/60 dark:border-[#1e2432]/60">
                {category.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className={`font-mono text-[11px] px-2.5 py-1 rounded-md transition-colors ${
                      skill.highlight
                        ? "bg-blue-600/10 text-blue-600 dark:bg-blue-400/10 dark:text-blue-400 font-semibold border border-blue-600/20 dark:border-blue-400/20"
                        : "bg-slate-100 dark:bg-slate-800/60 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700/50"
                    }`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
