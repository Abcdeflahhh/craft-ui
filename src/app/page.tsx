"use client";

import React, { useState } from "react";
import {
  Sparkles,
  Zap,
  Layers,
  Code2,
  ArrowRight,
  ShieldCheck,
  MousePointer2,
  Cpu,
  CheckCircle2,
  Copy,
  Check,
  Terminal,
  ExternalLink,
  Flame,
  User,
  GraduationCap,
  Briefcase,
  FolderGit2,
} from "lucide-react";
import { SpotlightCard } from "@/components/showcase/spotlight-card";
import { MagneticButton } from "@/components/showcase/magnetic-button";
import { FloatingDock } from "@/components/showcase/floating-dock";
import { BorderBeamCard } from "@/components/showcase/border-beam-card";
import { TiltCard } from "@/components/showcase/tilt-card";
import { CodeViewerModal } from "@/components/showcase/code-viewer-modal";
import {
  spotlightCardCode,
  magneticButtonCode,
  floatingDockCode,
  tiltCardCode,
} from "@/components/showcase/component-data";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

export default function Home() {
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    title: string;
    code: string;
  }>({
    isOpen: false,
    title: "",
    code: "",
  });

  const [activeGlow, setActiveGlow] = useState<
    "indigo" | "emerald" | "violet" | "amber" | "cyan"
  >("indigo");

  const [activeCategory, setActiveCategory] = useState<
    "all" | "bento" | "gestures" | "projects"
  >("all");

  const [copiedInstall, setCopiedInstall] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
  };

  const copyInstallCommand = async () => {
    const cmd = "npm install framer-motion lucide-react clsx tailwind-merge";
    await navigator.clipboard.writeText(cmd);
    setCopiedInstall(true);
    showToast("✓ Copied install command to clipboard!");
    setTimeout(() => setCopiedInstall(false), 2000);
  };

  const openCodeModal = (title: string, code: string) => {
    setModalState({ isOpen: true, title, code });
    showToast(`Viewing code for ${title}`);
  };

  return (
    <div className="relative min-h-screen bg-[#09090b] text-zinc-100 selection:bg-indigo-500 selection:text-white">
      {/* Dynamic Background Patterns */}
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-60" />
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[450px] w-[850px] rounded-full bg-gradient-to-b from-indigo-500/20 via-purple-500/10 to-transparent blur-[140px]" />

      {/* Floating Dynamic Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 flex items-center gap-2 rounded-full border border-indigo-500/30 bg-zinc-900/90 px-4 py-2 text-xs font-medium text-white shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-bottom-3 duration-200">
          <CheckCircle2 className="h-4 w-4 text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Code Viewer Modal */}
      <CodeViewerModal
        isOpen={modalState.isOpen}
        onClose={() => setModalState((prev) => ({ ...prev, isOpen: false }))}
        title={modalState.title}
        code={modalState.code}
      />

      {/* Header Navigation */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-zinc-950/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-500 text-white shadow-lg shadow-indigo-500/25">
              ✦
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-lg font-bold tracking-tight text-white">
                CraftUI
              </span>
              <span className="rounded-full border border-indigo-500/30 bg-indigo-500/10 px-2 py-0.5 text-[10px] font-semibold text-indigo-400">
                v1.2
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 text-xs">
            {/* Creator Badge */}
            <div className="hidden md:flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-emerald-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-medium">Created by Aflah (Mahasiswa IT)</span>
            </div>

            <MagneticButton>
              <a
                href="#creator-profile"
                className="flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 font-medium text-zinc-200 transition-colors hover:border-white/30 hover:bg-white/10 hover:text-white"
              >
                <User className="h-3.5 w-3.5 text-indigo-400" />
                <span>About Creator</span>
              </a>
            </MagneticButton>
          </div>
        </div>
      </header>

      <main className="relative z-10 mx-auto max-w-6xl px-6 pb-36 pt-12 sm:pt-20">
        {/* Hero Section */}
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-4 py-1.5 text-xs text-zinc-300 backdrop-blur-md">
            <Flame className="h-3.5 w-3.5 text-amber-400" />
            <span>Portofolio Eksplorasi Desain Web & Vibe Coding</span>
          </div>

          <h1 className="mt-6 max-w-3xl text-4xl font-extrabold tracking-tight text-white sm:text-6xl sm:leading-[1.15]">
            Handcrafted for{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400 bg-clip-text text-transparent">
              Design Engineers
            </span>{" "}
            & Modern Web.
          </h1>

          <p className="mt-5 max-w-2xl text-base text-zinc-400 sm:text-lg sm:leading-relaxed">
            Katalog micro-interactions, bento components, dan proyek portofolio yang dikurasi oleh{" "}
            <span className="font-semibold text-white">Aflah</span> sebagai Mahasiswa IT.
            Setiap elemen siap diuji coba dan di-copy langsung ke proyek nyata.
          </p>

          {/* Quick Install Terminal Bar */}
          <div className="mt-7 flex w-full max-w-md items-center justify-between rounded-xl border border-white/10 bg-zinc-900/80 px-3.5 py-2 text-xs font-mono text-zinc-400 backdrop-blur-md">
            <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
              <Terminal className="h-3.5 w-3.5 text-indigo-400 shrink-0" />
              <span className="text-zinc-300">npm i framer-motion lucide-react</span>
            </div>
            <button
              onClick={copyInstallCommand}
              className="ml-2 flex items-center gap-1 rounded-lg border border-white/10 bg-zinc-800 px-2.5 py-1 text-[11px] font-sans font-medium text-zinc-200 transition-colors hover:border-white/20 hover:text-white"
            >
              {copiedInstall ? (
                <>
                  <Check className="h-3 w-3 text-emerald-400" />
                  <span className="text-emerald-400">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="h-3 w-3 text-zinc-400" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <MagneticButton>
              <a
                href="#showcase"
                className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-600/30 transition-all hover:shadow-indigo-600/50"
              >
                <Zap className="h-4 w-4" />
                <span>Eksplorasi Komponen</span>
              </a>
            </MagneticButton>

            <MagneticButton>
              <a
                href="#creator-profile"
                className="flex items-center gap-2 rounded-xl border border-white/10 bg-zinc-900/80 px-6 py-3 text-sm font-semibold text-zinc-300 transition-colors hover:border-white/20 hover:bg-zinc-800 hover:text-white"
              >
                <FolderGit2 className="h-4 w-4 text-purple-400" />
                <span>Lihat BentoFlow & Profil</span>
              </a>
            </MagneticButton>
          </div>
        </div>

        {/* Section Divider */}
        <div id="showcase" className="my-16 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Interactive Category Filter Tabs */}
        <div className="mb-10 flex flex-wrap items-center justify-center gap-2">
          {[
            { id: "all", label: "All Components (5)" },
            { id: "bento", label: "Bento & Cards (3)" },
            { id: "gestures", label: "Gestures & Dock (2)" },
            { id: "projects", label: "Featured Projects (BentoFlow)" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id as any)}
              className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all ${
                activeCategory === tab.id
                  ? "bg-white text-zinc-950 shadow-md shadow-white/10"
                  : "border border-white/10 bg-zinc-900/60 text-zinc-400 hover:border-white/20 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* COMPONENT 1: SPOTLIGHT BENTO GRID */}
        {(activeCategory === "all" || activeCategory === "bento") && (
          <section className="space-y-6 mb-16">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-indigo-400">
                  <MousePointer2 className="h-3.5 w-3.5" />
                  <span>01. Cursor Driven Glow</span>
                </div>
                <h2 className="mt-1 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  Spotlight Bento Cards
                </h2>
                <p className="mt-1 text-sm text-zinc-400">
                  Arahkan kursor mouse ke dalam kartu untuk melihat efek radial spotlight dan border gradient dinamis.
                </p>
              </div>

              {/* Glow Color Switcher */}
              <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-zinc-900/50 p-1.5 self-start sm:self-auto">
                <span className="px-2 text-xs text-zinc-400">Pilih Glow:</span>
                {(["indigo", "emerald", "violet", "cyan"] as const).map((color) => (
                  <button
                    key={color}
                    onClick={() => setActiveGlow(color)}
                    className={`h-6 w-6 rounded-lg transition-transform ${
                      color === "indigo"
                        ? "bg-indigo-500"
                        : color === "emerald"
                        ? "bg-emerald-500"
                        : color === "violet"
                        ? "bg-violet-500"
                        : "bg-cyan-500"
                    } ${
                      activeGlow === color
                        ? "scale-110 ring-2 ring-white/50"
                        : "opacity-60 hover:opacity-100"
                    }`}
                  />
                ))}
                <button
                  onClick={() =>
                    openCodeModal("Spotlight Bento Card", spotlightCardCode)
                  }
                  className="ml-2 flex items-center gap-1 rounded-lg border border-white/10 bg-zinc-800 px-2.5 py-1 text-xs text-zinc-300 hover:text-white"
                >
                  <Code2 className="h-3.5 w-3.5" />
                  <span>Code</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              <SpotlightCard
                title="Fluid Bento Motion"
                description="Menghitung koordinat pointer relatif terhadap bounding box elemen untuk simulasi cahaya realistis."
                tag="Interactive"
                icon={Sparkles}
                glowColor={activeGlow}
              />
              <SpotlightCard
                title="Tailwind v4 Optimized"
                description="Didesain dengan utility CSS modern tanpa JavaScript overhead berlebih untuk performa 60fps."
                tag="Performance"
                icon={Cpu}
                glowColor={activeGlow}
              />
              <SpotlightCard
                title="Zero-Config Drop-in"
                description="Bisa langsung di-copy ke Next.js, Vite, atau React framework apa pun yang mendukung Tailwind."
                tag="Modular"
                icon={ShieldCheck}
                glowColor={activeGlow}
              />
            </div>
          </section>
        )}

        {/* COMPONENT 2: MAGNETIC INTERACTION PLAYGROUND */}
        {(activeCategory === "all" || activeCategory === "gestures") && (
          <section className="space-y-6 mb-16">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-purple-400">
                  <Zap className="h-3.5 w-3.5" />
                  <span>02. Spring Physics</span>
                </div>
                <h2 className="mt-1 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  Magnetic Elements Playground
                </h2>
                <p className="mt-1 text-sm text-zinc-400">
                  Elemen ditarik secara elastis ke arah kursor menggunakan spring animation Framer Motion.
                </p>
              </div>

              <button
                onClick={() =>
                  openCodeModal("Magnetic Button Component", magneticButtonCode)
                }
                className="flex items-center gap-1.5 self-start sm:self-auto rounded-lg border border-white/10 bg-zinc-800 px-3 py-1.5 text-xs text-zinc-300 hover:text-white"
              >
                <Code2 className="h-3.5 w-3.5" />
                <span>Get Code</span>
              </button>
            </div>

            <div className="flex min-h-[220px] flex-wrap items-center justify-center gap-6 rounded-2xl border border-white/10 bg-zinc-950/50 p-8 backdrop-blur-xl">
              <MagneticButton strength={0.4}>
                <div className="flex items-center gap-2.5 rounded-full border border-purple-500/30 bg-purple-500/10 px-6 py-3 font-medium text-purple-300 shadow-lg shadow-purple-500/10 hover:border-purple-400/50 hover:bg-purple-500/20">
                  <Sparkles className="h-4 w-4" />
                  <span>Hover Me (Spring 0.4)</span>
                </div>
              </MagneticButton>

              <MagneticButton strength={0.6}>
                <div className="flex items-center gap-2 rounded-2xl bg-white px-7 py-3.5 font-semibold text-zinc-950 shadow-xl shadow-white/10 hover:bg-zinc-200">
                  <Zap className="h-4 w-4 text-indigo-600 fill-indigo-600" />
                  <span>Magnetic Button</span>
                </div>
              </MagneticButton>

              <MagneticButton strength={0.3}>
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-zinc-800/80 text-white hover:border-white/30 hover:bg-zinc-700">
                  ✦
                </div>
              </MagneticButton>
            </div>
          </section>
        )}

        {/* COMPONENT 3 & 4: FLOATING DOCK & BORDER BEAM */}
        {(activeCategory === "all" || activeCategory === "gestures" || activeCategory === "bento") && (
          <section className="space-y-6 mb-16">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-pink-400">
                  <Layers className="h-3.5 w-3.5" />
                  <span>03 & 04. macOS Dock & Laser Border Beam</span>
                </div>
                <h2 className="mt-1 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  Dynamic Island Dock & Continuous Beam
                </h2>
                <p className="mt-1 text-sm text-zinc-400">
                  Animasi pembesaran bertahap saat kursor melintas, ditambah efek border laser neon yang berputar tanpa henti.
                </p>
              </div>

              <button
                onClick={() =>
                  openCodeModal("macOS Floating Dock", floatingDockCode)
                }
                className="flex items-center gap-1.5 self-start sm:self-auto rounded-lg border border-white/10 bg-zinc-800 px-3 py-1.5 text-xs text-zinc-300 hover:text-white"
              >
                <Code2 className="h-3.5 w-3.5" />
                <span>Get Dock Code</span>
              </button>
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <div className="flex min-h-[260px] flex-col items-center justify-center gap-4 rounded-2xl border border-white/10 bg-zinc-950/50 p-6 backdrop-blur-xl">
                <span className="text-xs text-zinc-500 font-mono">
                  // Hover across the dock items below
                </span>
                <FloatingDock />
              </div>

              <div className="flex flex-col justify-center">
                <BorderBeamCard
                  title="Continuous Glowing Border Beam"
                  description="Menggunakan conic gradient dan rotation keyframe murni untuk efek laser neon sinematik ala landing page modern."
                  badge="Satisfying"
                />
              </div>
            </div>
          </section>
        )}

        {/* COMPONENT 5 & FEATURED PROJECT: BENTOFLOW & CREATOR CARD */}
        {(activeCategory === "all" || activeCategory === "projects" || activeCategory === "bento") && (
          <section id="creator-profile" className="space-y-6 pt-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-400">
                  <GraduationCap className="h-4 w-4" />
                  <span>05. Karya Unggulan & Profil Pembuat</span>
                </div>
                <h2 className="mt-1 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  Featured Project: BentoFlow
                </h2>
                <p className="mt-1 text-sm text-zinc-400">
                  Proyek nyata portofolio mahasiswa IT dengan implementasi 3D Parallax Tilt Card.
                </p>
              </div>

              <button
                onClick={() =>
                  openCodeModal("3D Parallax Tilt Card", tiltCardCode)
                }
                className="flex items-center gap-1.5 self-start sm:self-auto rounded-lg border border-white/10 bg-zinc-800 px-3 py-1.5 text-xs text-zinc-300 hover:text-white"
              >
                <Code2 className="h-3.5 w-3.5" />
                <span>Tilt Card Code</span>
              </button>
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              {/* Tilt Card 1: BentoFlow Showcase (Spans 2 columns) */}
              <div className="lg:col-span-2">
                <TiltCard
                  subtitle="Project Portofolio Utama"
                  title="BentoFlow — Interactive Workflow Hub"
                  description="Aplikasi manajemen alur kerja (workflow) dengan tata letak Bento Grid modern, drag-and-drop state, dan navigasi modular yang responsif. Dibangun untuk memberikan pengalaman produktivitas yang rapi dan estetis."
                  tag="Featured Creation"
                  stats={[
                    { label: "Design Pattern", value: "Bento Grid UI" },
                    { label: "Ecosystem", value: "Next.js & React" },
                    { label: "Status", value: "Live Portfolio" },
                  ]}
                />
              </div>

              {/* Creator Bio Card */}
              <div className="flex flex-col justify-between rounded-3xl border border-white/10 bg-gradient-to-b from-zinc-900/80 to-zinc-950 p-6 backdrop-blur-xl">
                <div>
                  <div className="flex items-center gap-3.5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 text-lg font-bold text-white shadow-lg shadow-indigo-500/25">
                      A
                    </div>
                    <div>
                      <h3 className="font-bold text-white">Aflah</h3>
                      <p className="text-xs text-zinc-400">Mahasiswa IT & Creative Coder</p>
                    </div>
                  </div>

                  <p className="mt-4 text-xs leading-relaxed text-zinc-400">
                    Fokus pada eksplorasi antarmuka digital yang interaktif, micro-interactions,
                    dan *vibe coding*. Menciptakan produk web yang menggabungkan estetika tinggi dan performa mulus.
                  </p>

                  <div className="mt-5 space-y-2 border-t border-white/10 pt-4 text-xs text-zinc-300">
                    <div className="flex items-center gap-2">
                      <GraduationCap className="h-4 w-4 text-indigo-400" />
                      <span>Jurusan Teknologi Informasi</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Briefcase className="h-4 w-4 text-purple-400" />
                      <span>Terbuka untuk Magang & Project</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-2">
                  <a
                    href="https://github.com/Abcdeflahhh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 py-2.5 text-xs font-medium text-zinc-200 transition-colors hover:border-white/20 hover:bg-white/10 hover:text-white"
                  >
                    <GithubIcon className="h-4 w-4" />
                    <span>GitHub Profile</span>
                  </a>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Footer */}
        <footer className="mt-28 border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>
            © 2026 CraftUI — Dibuat oleh <span className="text-zinc-300 font-medium">Aflah</span> sebagai portofolio Mahasiswa IT.
          </p>
          <div className="flex items-center gap-3">
            <span>Next.js 16</span>
            <span>•</span>
            <span>Tailwind v4</span>
            <span>•</span>
            <span>Framer Motion</span>
          </div>
        </footer>
      </main>
    </div>
  );
}
