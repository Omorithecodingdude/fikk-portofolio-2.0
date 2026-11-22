"use client";

import React, { useState, useRef, useEffect } from "react";
import { profileData } from "@/data/profile";
import { Terminal as TerminalIcon, CornerDownLeft, Trash2 } from "lucide-react";

interface TerminalLine {
  type: "input" | "output" | "error" | "system";
  text: string;
}

export default function TerminalWidget() {
  const [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState<TerminalLine[]>([
    {
      type: "system",
      text: "TAUFIK.DEV Interactive Terminal [Version 2.0.0]\nType 'help' to see list of available commands or click quick buttons below.",
    },
  ]);

  const terminalEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommand = (rawCmd: string) => {
    const cmd = rawCmd.trim().toLowerCase();
    if (!cmd) return;

    const newHistory: TerminalLine[] = [
      ...history,
      { type: "input", text: `taufik@tjkt:~$ ${rawCmd}` },
    ];

    switch (cmd) {
      case "help":
        newHistory.push({
          type: "output",
          text: `Daftar perintah yang tersedia:
  • help       : Menampilkan panduan perintah ini
  • whoami     : Menampilkan identitas dan profil singkat
  • skills     : Menampilkan ringkasan keahlian teknis
  • projects   : Menampilkan daftar proyek unggulan
  • ping       : Uji konektivitas jaringan ICMP
  • contact    : Info kontak dan media sosial
  • clear      : Membersihkan layar terminal`,
        });
        break;

      case "whoami":
      case "bio":
        newHistory.push({
          type: "output",
          text: `Nama       : ${profileData.name} (${profileData.nickname})
Pendidikan : ${profileData.classInfo} · ${profileData.school}
Lokasi     : ${profileData.location}
Minat      : Jaringan Komputer (MikroTik, TP-Link), Web Development, Python
Status     : ${profileData.status}`,
        });
        break;

      case "skills":
        newHistory.push({
          type: "output",
          text: `[NETWORKING]
  - MikroTik RouterOS (Bridge, Hotspot, DHCP, Firewall)
  - TP-Link (Parental Control, WISP Mode)
  - Cisco Packet Tracer, VLAN
[DEVELOPMENT]
  - Next.js 16, React 19, TypeScript, Tailwind CSS
  - Python (CLI, Secrets, Automation)
  - PHP & MySQL (CRUD)
[SYSADMIN & OS]
  - Debian Linux, Ubuntu Server, Windows Server, VMware`,
        });
        break;

      case "projects":
        newHistory.push({
          type: "output",
          text: `1. Password Generator CLI (Python secrets)
2. Animasi Bunga Interaktif (HTML/CSS Keyframes/JS)
3. Data Siswa SMK (PHP, MySQL)
4. Konfigurasi MikroTik (Bridge & Hotspot)
5. Konfigurasi TP-Link (Parental Control & WISP)
6. Portofolio 2.0 (Next.js, Tailwind CSS)`,
        });
        break;

      case "ping":
      case "ping google.com":
        newHistory.push({
          type: "output",
          text: `PING smkn3-banjarmasin.sch.id (103.147.154.21): 56 data bytes
64 bytes from 103.147.154.21: icmp_seq=1 ttl=56 time=14.2 ms
64 bytes from 103.147.154.21: icmp_seq=2 ttl=56 time=12.8 ms
64 bytes from 103.147.154.21: icmp_seq=3 ttl=56 time=13.1 ms
--- smkn3-banjarmasin.sch.id ping statistics ---
3 packets transmitted, 3 received, 0% packet loss, time 2004ms
rtt min/avg/max = 12.8/13.3/14.2 ms`,
        });
        break;

      case "contact":
        newHistory.push({
          type: "output",
          text: `Email  : ${profileData.email}
GitHub : ${profileData.github}
Open for collaboration: Yes`,
        });
        break;

      case "clear":
        setHistory([]);
        setInputVal("");
        return;

      default:
        newHistory.push({
          type: "error",
          text: `bash: command not found: ${rawCmd}. Ketik 'help' untuk daftar perintah.`,
        });
        break;
    }

    setHistory(newHistory);
    setInputVal("");
  };

  const quickCommands = ["help", "whoami", "skills", "projects", "ping", "contact"];

  return (
    <section id="terminal" className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-10">
          <p className="font-mono text-xs uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-2">
            // interactive shell
          </p>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-950 dark:text-slate-100 tracking-tight">
            TJKT Interactive Terminal
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
            Eksplorasi profil dan keahlian Taufik melalui terminal command line interaktif.
          </p>
        </div>

        {/* Terminal Window */}
        <div className="rounded-2xl border border-slate-800 bg-[#0c1017] text-slate-200 shadow-2xl overflow-hidden font-mono text-xs">
          {/* Terminal Titlebar */}
          <div className="bg-[#161c28] px-4 py-3 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-amber-500 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block"></span>
              <span className="ml-2 text-slate-400 font-semibold text-[11px] flex items-center gap-1.5">
                <TerminalIcon className="w-3.5 h-3.5 text-blue-400" />
                taufik@tjkt-terminal:~ (bash)
              </span>
            </div>

            <button
              onClick={() => setHistory([])}
              className="text-slate-400 hover:text-slate-200 transition-colors cursor-pointer flex items-center gap-1"
              title="Clear terminal"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span className="text-[10px]">clear</span>
            </button>
          </div>

          {/* Terminal Screen Body */}
          <div className="p-5 max-h-80 overflow-y-auto space-y-3 bg-[#0a0e14]">
            {history.map((line, idx) => (
              <div key={idx}>
                {line.type === "input" && (
                  <p className="text-emerald-400 font-semibold">{line.text}</p>
                )}
                {line.type === "output" && (
                  <pre className="text-slate-300 font-mono whitespace-pre-wrap leading-relaxed">
                    {line.text}
                  </pre>
                )}
                {line.type === "error" && (
                  <p className="text-rose-400">{line.text}</p>
                )}
                {line.type === "system" && (
                  <p className="text-blue-400/90 italic whitespace-pre-wrap">
                    {line.text}
                  </p>
                )}
              </div>
            ))}
            <div ref={terminalEndRef} />
          </div>

          {/* Terminal Input Line */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleCommand(inputVal);
            }}
            className="flex items-center gap-2 px-5 py-3 bg-[#111722] border-t border-slate-800"
          >
            <span className="text-emerald-400 font-bold">taufik@tjkt:~$</span>
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="type a command, e.g. 'help'..."
              className="flex-1 bg-transparent text-slate-100 outline-none font-mono text-xs placeholder:text-slate-500"
            />
            <button
              type="submit"
              className="p-1 text-slate-400 hover:text-blue-400 transition-colors"
            >
              <CornerDownLeft className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>

        {/* Quick Command Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-4">
          <span className="font-mono text-[11px] text-slate-500 mr-1">Quick run:</span>
          {quickCommands.map((cmd) => (
            <button
              key={cmd}
              onClick={() => handleCommand(cmd)}
              className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-white dark:bg-[#141820] border border-[#e2e0d8] dark:border-[#1e2432] text-slate-700 dark:text-slate-300 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer shadow-xs"
            >
              ${cmd}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
