"use client";

import React, { useState } from "react";
import { profileData } from "@/data/profile";
import { Mail, Copy, Check, Send } from "lucide-react";
import GithubIcon from "@/components/GithubIcon";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [sentMessage, setSentMessage] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.message.trim()) return;
    const subject = encodeURIComponent(`Pesan dari Portofolio: ${formData.name || "Tamu"}`);
    const body = encodeURIComponent(
      `Halo Taufik,\n\nNama: ${formData.name}\nEmail: ${formData.email}\n\nPesan:\n${formData.message}`
    );
    window.location.href = `mailto:${profileData.email}?subject=${subject}&body=${body}`;
    setSentMessage(true);
  };

  return (
    <section
      id="contact"
      className="py-24 bg-white/50 dark:bg-[#141820]/50 border-t border-[#e2e0d8] dark:border-[#1e2432] transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <p className="font-mono text-xs uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-2">
            {"// contact"}
          </p>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-950 dark:text-slate-100 tracking-tight">
            Let&apos;s Connect.
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-3 leading-relaxed">
            Mau kolaborasi proyek, diskusi seputar jaringan komputer MikroTik, atau ngobrol santai seputar software development? Silakan hubungi saya!
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8 items-start">
          {/* Quick Contact Cards (2 cols) */}
          <div className="md:col-span-2 space-y-4">
            {/* Email Card */}
            <div className="p-6 rounded-2xl border border-[#e2e0d8] dark:border-[#1e2432] bg-white dark:bg-[#0d0f14] shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800/40 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-sm text-slate-900 dark:text-slate-100 mb-1">
                Kirim Email Langsung
              </h3>
              <p className="font-mono text-xs text-slate-500 dark:text-slate-400 mb-4 break-all">
                {profileData.email}
              </p>
              <div className="flex items-center gap-2">
                <a
                  href={`mailto:${profileData.email}`}
                  className="flex-1 text-center font-mono text-xs py-2 px-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                >
                  Buka Email
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg border border-[#e2e0d8] dark:border-[#1e2432] text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer"
                  title="Salin email"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* GitHub Card */}
            <div className="p-6 rounded-2xl border border-[#e2e0d8] dark:border-[#1e2432] bg-white dark:bg-[#0d0f14] shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-800 dark:text-slate-200 mb-4">
                <GithubIcon className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-sm text-slate-900 dark:text-slate-100 mb-1">
                GitHub Repository
              </h3>
              <p className="font-mono text-xs text-slate-500 dark:text-slate-400 mb-4">
                @omorithecodingdude
              </p>
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center font-mono text-xs py-2 px-3 rounded-lg border border-[#e2e0d8] dark:border-[#1e2432] text-slate-700 dark:text-slate-200 hover:border-blue-600 hover:text-blue-600 transition-colors"
              >
                Kunjungi GitHub →
              </a>
            </div>
          </div>

          {/* Quick Message Form (3 cols) */}
          <div className="md:col-span-3 rounded-2xl border border-[#e2e0d8] dark:border-[#1e2432] bg-white dark:bg-[#0d0f14] p-6 sm:p-8 shadow-sm">
            <h3 className="font-display font-bold text-base text-slate-900 dark:text-slate-100 mb-1">
              Kirim Pesan Cepat
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
              Form ini akan membuka aplikasi email default Anda dengan format pesan rapi.
            </p>

            {sentMessage && (
              <div className="p-3 mb-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/50 text-emerald-700 dark:text-emerald-300 text-xs flex items-center gap-2">
                <Check className="w-4 h-4 shrink-0" />
                <span>Aplikasi email telah dibuka dengan format pesan yang telah disiapkan!</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-mono text-[11px] uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
                  Nama Anda
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Contoh: Budi Santoso"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#e2e0d8] dark:border-[#1e2432] bg-slate-50 dark:bg-[#141820] text-slate-900 dark:text-slate-100 font-sans text-xs outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              <div>
                <label className="block font-mono text-[11px] uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
                  Email Anda
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="email@example.com"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#e2e0d8] dark:border-[#1e2432] bg-slate-50 dark:bg-[#141820] text-slate-900 dark:text-slate-100 font-sans text-xs outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              <div>
                <label className="block font-mono text-[11px] uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
                  Pesan atau Topik
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Halo Taufik, saya ingin mengajak diskusi tentang..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#e2e0d8] dark:border-[#1e2432] bg-slate-50 dark:bg-[#141820] text-slate-900 dark:text-slate-100 font-sans text-xs outline-none focus:border-blue-500 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 font-mono text-xs tracking-wider py-3 px-6 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition-all cursor-pointer font-semibold shadow-xs"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Kirim Pesan via Email</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
