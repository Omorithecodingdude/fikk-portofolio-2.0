"use client";

import React, { useState } from "react";
import { projectsData, Project } from "@/data/projects";
import { ExternalLink, Sparkles, FolderGit2 } from "lucide-react";
import GithubIcon from "@/components/GithubIcon";

type CategoryFilter = "all" | "programming" | "networking" | "web";

export default function Projects() {
  const [activeTab, setActiveTab] = useState<CategoryFilter>("all");

  const categories: { key: CategoryFilter; label: string }[] = [
    { key: "all", label: "Semua Proyek" },
    { key: "networking", label: "Networking (TJKT)" },
    { key: "programming", label: "Programming" },
    { key: "web", label: "Web Development" },
  ];

  const filteredProjects =
    activeTab === "all"
      ? projectsData
      : projectsData.filter((p) => p.category === activeTab);

  return (
    <section
      id="projects"
      className="py-24 bg-white/50 dark:bg-[#141820]/50 border-y border-[#e2e0d8] dark:border-[#1e2432] transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="font-mono text-xs uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-2">
            // my projects
          </p>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-950 dark:text-slate-100 tracking-tight">
            Yang Pernah Aku Buat
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-3">
            Koleksi proyek pemrograman mandiri dan konfigurasi perangkat keras jaringan.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveTab(cat.key)}
              className={`font-mono text-xs px-4 py-2 rounded-full border transition-all cursor-pointer ${
                activeTab === cat.key
                  ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900 border-slate-900 dark:border-white shadow-xs font-semibold"
                  : "bg-white/80 dark:bg-[#141820]/80 text-slate-600 dark:text-slate-400 border-[#e2e0d8] dark:border-[#1e2432] hover:border-blue-500"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl border border-[#e2e0d8] dark:border-[#1e2432] bg-white dark:bg-[#0d0f14] p-7 flex flex-col justify-between hover:shadow-xl hover:border-blue-500/50 dark:hover:border-blue-500/50 hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{project.icon}</span>
                  <span
                    className={`font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-md border ${project.categoryColor}`}
                  >
                    {project.categoryLabel}
                  </span>
                </div>

                <div className="mb-2">
                  <h3 className="font-display font-bold text-lg text-slate-900 dark:text-slate-100">
                    {project.title}
                  </h3>
                  <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider">
                    {project.type}
                  </span>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#e2e0d8] dark:border-[#1e2432] mb-4">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="font-mono text-[10px] px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {project.github && (
                  <div className="flex items-center justify-end">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-[11px] text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>View GitHub</span>
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}

          {/* More coming soon card */}
          {activeTab === "all" && (
            <div className="rounded-2xl border-2 border-dashed border-[#e2e0d8] dark:border-[#1e2432] p-7 flex flex-col justify-center items-center text-center opacity-75 hover:opacity-100 transition-opacity bg-transparent">
              <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
                <Sparkles className="w-6 h-6 animate-pulse" />
              </div>
              <h3 className="font-display font-bold text-base text-slate-800 dark:text-slate-200 mb-1">
                More Projects Coming Soon
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 max-w-xs">
                Masih aktif belajar dan ngulik hal baru di bidang jaringan dan software engineering. Stay tuned!
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
