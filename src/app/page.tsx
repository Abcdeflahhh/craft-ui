"use client";

import React, { useState, useEffect } from "react";
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
  MapPin,
  Mail,
  ArrowUp,
  Palette,
  Play,
  Maximize2,
} from "lucide-react";

import { SpotlightCard } from "@/components/showcase/spotlight-card";
import { MagneticButton } from "@/components/showcase/magnetic-button";
import { FloatingDock } from "@/components/showcase/floating-dock";
import { BorderBeamCard } from "@/components/showcase/border-beam-card";
import { TiltCard } from "@/components/showcase/tilt-card";
import { ShimmerButton } from "@/components/showcase/shimmer-button";
import { CodeViewerModal } from "@/components/showcase/code-viewer-modal";
import {
  COMPONENT_REGISTRY,
  ComponentSnippet,
} from "@/components/showcase/component-data";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Home() {
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    title: string;
    code: string;
    usageCode?: string;
  }>({
    isOpen: false,
    title: "",
    code: "",
    usageCode: "",
  });

  const [activeGlow, setActiveGlow] = useState<
    "indigo" | "emerald" | "violet" | "amber" | "cyan"
  >("indigo");

  const [shimmerTheme, setShimmerTheme] = useState<
    "purple" | "cyan" | "emerald" | "amber"
  >("purple");

  const [activeCategory, setActiveCategory] = useState<
    "all" | "bento" | "gestures" | "shimmer" | "projects"
  >("all");

  const [copiedInstall, setCopiedInstall] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  const openCodeModal = (snippetKey: keyof typeof COMPONENT_REGISTRY) => {
    const item = COMPONENT_REGISTRY[snippetKey];
    if (item) {
      setModalState({
        isOpen: true,
        title: item.title,
        code: item.componentCode,
        usageCode: item.usageCode,
      });
      showToast(`Melihat kode: ${item.title}`);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const shimmerColorMap = {
    purple: "#c084fc",
    cyan: "#22d3ee",
    emerald: "#34d399",
    amber: "#fbbf24",
  };

  return (
    <div className="relative min-h-screen bg-[#09090b] text-zinc-100 selection:bg-indigo-500 selection:text-white">
      {/* Dynamic Background Patterns */}
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-60" />
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[950px] rounded-full bg-gradient-to-b from-indigo-500/20 via-purple-500/10 to-transparent blur-[140px]" />

      {/* Floating Dynamic Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 flex items-center gap-2 rounded-full border border-indigo-500/30 bg-zinc-900/95 px-4 py-2 text-xs font-medium text-white shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-bottom-3 duration-200">
          <CheckCircle2 className="h-4 w-4 text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Floating Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-zinc-900/80 text-zinc-300 shadow-xl backdrop-blur-lg transition-all hover:scale-110 hover:border-white/30 hover:bg-zinc-800 hover:text-white"
          title="Kembali ke atas"
        >
          <ArrowUp className="h-4 w-4" />
        </button>
      )}

      {/* Code Viewer Modal */}
      <CodeViewerModal
        isOpen={modalState.isOpen}
        onClose={() => setModalState((prev) => ({ ...prev, isOpen: false }))}
        title={modalState.title}
        code={modalState.code}
        usageCode={modalState.usageCode}
      />

      {/* Header Navigation */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-zinc-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#hero" className="flex items-center gap-3 group">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-500 text-white shadow-lg shadow-indigo-500/25 group-hover:scale-105 transition-transform">
              ✦
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-lg font-bold tracking-tight text-white group-hover:text-indigo-300 transition-colors">
                CraftUI
              </span>
              <span className="rounded-full border border-indigo-500/30 bg-indigo-500/10 px-2 py-0.5 text-[10px] font-semibold text-indigo-400">
                v1.5 Final
              </span>
            </div>
          </a>

          <div className="flex items-center gap-3 text-xs">
            {/* Creator Badge */}
            <a
              href="#creator-profile"
              className="hidden md:flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-emerald-300 hover:bg-emerald-500/15 transition-colors"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-medium">Aflah Athallah • Sem 5 TI</span>
            </a>

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

      <main id="hero" className="relative z-10 mx-auto max-w-6xl px-6 pb-36 pt-12 sm:pt-20">
        {/* Hero Section */}
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-4 py-1.5 text-xs text-zinc-300 backdrop-blur-md">
            <Flame className="h-3.5 w-3.5 text-amber-400" />
            <span>Portofolio Desain Rekayasa Antarmuka & Vibe Coding</span>
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
            <span className="font-semibold text-white">Aflah Athallah</span> sebagai Mahasiswa Teknik Informatika (Semester 5).
            Semua elemen siap diuji coba secara interaktif dan di-copy langsung untuk proyek produksi.
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
                <span>Eksplorasi Komponen (6)</span>
              </a>
            </MagneticButton>

            <MagneticButton>
              <a
                href="#creator-profile"
                className="flex items-center gap-2 rounded-xl border border-white/10 bg-zinc-900/80 px-6 py-3 text-sm font-semibold text-zinc-300 transition-colors hover:border-white/20 hover:bg-zinc-800 hover:text-white"
              >
                <FolderGit2 className="h-4 w-4 text-purple-400" />
                <span>Lihat Portofolio & Profil</span>
              </a>
            </MagneticButton>
          </div>
        </div>

        {/* Section Divider */}
        <div id="showcase" className="my-16 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Interactive Category Filter Tabs */}
        <div className="mb-10 flex flex-wrap items-center justify-center gap-2">
          {[
            { id: "all", label: "All Components (6)" },
            { id: "bento", label: "Bento & Cards (3)" },
            { id: "gestures", label: "Gestures & Dock (2)" },
            { id: "shimmer", label: "Shimmer & Laser (2)" },
            { id: "projects", label: "Featured Projects (3)" },
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
          <section id="spotlight-section" className="space-y-6 mb-16">
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
                        ? "scale-110 ring-2 ring-white/50 shadow-md"
                        : "opacity-60 hover:opacity-100"
                    }`}
                  />
                ))}
                <button
                  onClick={() => openCodeModal("spotlight")}
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
                description="Menghitung koordinat pointer relatif terhadap bounding box elemen untuk simulasi cahaya radial realistis."
                tag="Interactive"
                icon={Sparkles}
                glowColor={activeGlow}
              />
              <SpotlightCard
                title="Tailwind v4 Optimized"
                description="Didesain dengan utility CSS modern tanpa JavaScript overhead berlebih untuk menjamin performa 60fps."
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
          <section id="magnetic-section" className="space-y-6 mb-16">
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
                onClick={() => openCodeModal("magnetic")}
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
        {(activeCategory === "all" || activeCategory === "gestures" || activeCategory === "bento" || activeCategory === "shimmer") && (
          <section id="dock-section" className="space-y-6 mb-16">
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

              <div className="flex items-center gap-2 self-start sm:self-auto">
                <button
                  onClick={() => openCodeModal("dock")}
                  className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-zinc-800 px-3 py-1.5 text-xs text-zinc-300 hover:text-white"
                >
                  <Code2 className="h-3.5 w-3.5" />
                  <span>Dock Code</span>
                </button>
                <button
                  onClick={() => openCodeModal("borderBeam")}
                  className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-zinc-800 px-3 py-1.5 text-xs text-zinc-300 hover:text-white"
                >
                  <Code2 className="h-3.5 w-3.5" />
                  <span>Beam Code</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <div className="flex min-h-[260px] flex-col items-center justify-center gap-4 rounded-2xl border border-white/10 bg-zinc-950/50 p-6 backdrop-blur-xl">
                <span className="text-xs text-zinc-500 font-mono">
                  // Klik atau arahkan kursor ke ikon dock di bawah
                </span>
                <FloatingDock />
              </div>

              <div className="flex flex-col justify-center">
                <BorderBeamCard
                  title="Continuous Glowing Border Beam"
                  description="Menggunakan conic gradient dan rotation keyframe murni untuk efek laser neon sinematik ala landing page SaaS modern."
                  badge="Satisfying"
                />
              </div>
            </div>
          </section>
        )}

        {/* COMPONENT 5: SHIMMER BUTTON & MICRO-INTERACTIONS */}
        {(activeCategory === "all" || activeCategory === "shimmer" || activeCategory === "gestures") && (
          <section id="shimmer-section" className="space-y-6 mb-16">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>05. High-Impact Micro-Interactions</span>
                </div>
                <h2 className="mt-1 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  Shimmer Button & Glow Reflections
                </h2>
                <p className="mt-1 text-sm text-zinc-400">
                  Tombol call-to-action modern dengan efek refleksi cahaya bergerak (shimmer) menggunakan CSS container queries.
                </p>
              </div>

              <div className="flex items-center gap-2 self-start sm:self-auto">
                {/* Shimmer Color Switcher */}
                <div className="flex items-center gap-1.5 rounded-xl border border-white/10 bg-zinc-900/50 p-1.5">
                  {(["purple", "cyan", "emerald", "amber"] as const).map((color) => (
                    <button
                      key={color}
                      onClick={() => setShimmerTheme(color)}
                      className={`h-5 w-5 rounded-md transition-transform ${
                        color === "purple"
                          ? "bg-purple-500"
                          : color === "cyan"
                          ? "bg-cyan-500"
                          : color === "emerald"
                          ? "bg-emerald-500"
                          : "bg-amber-500"
                      } ${
                        shimmerTheme === color
                          ? "scale-110 ring-2 ring-white/60"
                          : "opacity-60 hover:opacity-100"
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={() => openCodeModal("shimmer")}
                  className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-zinc-800 px-3 py-1.5 text-xs text-zinc-300 hover:text-white"
                >
                  <Code2 className="h-3.5 w-3.5" />
                  <span>Shimmer Code</span>
                </button>
              </div>
            </div>

            <div className="flex min-h-[220px] flex-wrap items-center justify-center gap-6 rounded-2xl border border-white/10 bg-zinc-950/50 p-8 backdrop-blur-xl">
              <ShimmerButton
                shimmerColor={shimmerColorMap[shimmerTheme]}
                shimmerDuration="2.5s"
              >
                <Sparkles className="h-4 w-4 text-purple-400" />
                <span>Exploration Mode</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </ShimmerButton>

              <ShimmerButton
                shimmerColor="#38bdf8"
                shimmerDuration="3.5s"
                borderRadius="14px"
                className="font-semibold"
              >
                <Zap className="h-4 w-4 text-cyan-400 fill-cyan-400" />
                <span>Launch Interactive Demo</span>
              </ShimmerButton>

              <ShimmerButton
                shimmerColor="#34d399"
                shimmerDuration="2s"
                className="text-xs"
              >
                <span>Live Ready</span>
              </ShimmerButton>
            </div>
          </section>
        )}

        {/* COMPONENT 6 & FEATURED PROJECTS: 3D PARALLAX & PORTFOLIO SHOWCASE */}
        {(activeCategory === "all" || activeCategory === "projects" || activeCategory === "bento") && (
          <section id="creator-profile" className="space-y-6 pt-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-400">
                  <GraduationCap className="h-4 w-4" />
                  <span>06. Karya Unggulan & Profil Pembuat</span>
                </div>
                <h2 className="mt-1 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  Featured Projects & Creator
                </h2>
                <p className="mt-1 text-sm text-zinc-400">
                  Kompilasi proyek portofolio nyata yang telah di-deploy dan dapat diakses langsung.
                </p>
              </div>

              <button
                onClick={() => openCodeModal("tilt")}
                className="flex items-center gap-1.5 self-start sm:self-auto rounded-lg border border-white/10 bg-zinc-800 px-3 py-1.5 text-xs text-zinc-300 hover:text-white"
              >
                <Code2 className="h-3.5 w-3.5" />
                <span>Tilt Card Code</span>
              </button>
            </div>

            {/* Grid Showcase of Real Projects */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              {/* Tilt Card 1: BentoFlow SaaS */}
              <div className="lg:col-span-2">
                <TiltCard
                  subtitle="Featured Project • Next.js 15/16 & AI"
                  title="BentoFlow — AI-Powered Bento Portfolio Hub"
                  description="Platform web interaktif untuk menyusun portofolio personal dengan arsitektur Bento Grid modular, drag-and-drop reordering spasial, 5 tema kustom dinamis, serta AI Copilot prompt generator."
                  tag="Live Production"
                  href="https://bentoflowaflah.vercel.app"
                  hrefLabel="Kunjungi bentoflowaflah.vercel.app"
                  stats={[
                    { label: "Architecture", value: "Bento Grid UI" },
                    { label: "Interactions", value: "dnd-kit Spasial" },
                    { label: "Deployment", value: "Vercel Live" },
                  ]}
                />
              </div>

              {/* Creator Bio Card */}
              <div className="flex flex-col justify-between rounded-3xl border border-white/10 bg-gradient-to-b from-zinc-900/90 to-zinc-950 p-6 sm:p-7 backdrop-blur-xl">
                <div>
                  <div className="flex items-center gap-3.5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 text-lg font-bold text-white shadow-lg shadow-indigo-500/25">
                      A
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-base">Aflah Athallah</h3>
                      <p className="text-xs text-zinc-400">Mahasiswa IT & Creative Coder</p>
                    </div>
                  </div>

                  <p className="mt-4 text-xs leading-relaxed text-zinc-400">
                    Mahasiswa S1 Teknik Informatika berdomisili di <span className="text-zinc-200">Cikarang, Bekasi</span>. Fokus mendalami perancangan web modern, arsitektur data bersih, micro-interactions, serta eksplorasi <em>vibe coding</em> dengan AI.
                  </p>

                  <div className="mt-5 space-y-2 border-t border-white/10 pt-4 text-xs text-zinc-300">
                    <div className="flex items-center gap-2">
                      <GraduationCap className="h-4 w-4 text-indigo-400 shrink-0" />
                      <span>S1 Teknik Informatika (Semester 5)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-emerald-400 shrink-0" />
                      <span>Cikarang, Bekasi, Jawa Barat</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Briefcase className="h-4 w-4 text-purple-400 shrink-0" />
                      <span className="text-emerald-300 font-medium">Terbuka untuk Magang MSIB / Internship</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex flex-col gap-2 pt-4 border-t border-white/10">
                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href="https://github.com/Abcdeflahhh"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 py-2 text-xs font-medium text-zinc-200 transition-colors hover:border-white/20 hover:bg-white/10 hover:text-white"
                    >
                      <GithubIcon className="h-3.5 w-3.5" />
                      <span>GitHub</span>
                    </a>
                    <a
                      href="https://linkedin.com/in/aflahtamam68"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 py-2 text-xs font-medium text-zinc-200 transition-colors hover:border-white/20 hover:bg-white/10 hover:text-white"
                    >
                      <LinkedinIcon className="h-3.5 w-3.5 text-blue-400" />
                      <span>LinkedIn</span>
                    </a>
                  </div>

                  <a
                    href="mailto:aflahtamamke2@gmail.com"
                    className="flex items-center justify-center gap-2 rounded-xl border border-indigo-500/20 bg-indigo-500/10 py-2 text-xs font-medium text-indigo-300 transition-colors hover:border-indigo-500/40 hover:bg-indigo-500/20"
                  >
                    <Mail className="h-3.5 w-3.5" />
                    <span>aflahtamamke2@gmail.com</span>
                  </a>
                </div>
              </div>

              {/* Project Card 2: ChromaCraft Studio */}
              <div className="lg:col-span-1">
                <TiltCard
                  subtitle="Design Tokens & A11y"
                  title="ChromaCraft Studio"
                  description="AI design system & palette playground dengan sintesis mood-to-tokens otomatis, color blindness simulator, dan audit WCAG AAA."
                  tag="AI Studio"
                  stats={[
                    { label: "Engine", value: "Vite + React 19" },
                    { label: "Audit", value: "WCAG AAA" },
                    { label: "Export", value: "CSS & Tailwind" },
                  ]}
                />
              </div>

              {/* Project Card 3: UAS Web 2 Project */}
              <div className="lg:col-span-2">
                <TiltCard
                  subtitle="Academic Full-Stack Project • Kuliah Pemweb 2"
                  title="Aplikasi UAS Pemrograman Web 2"
                  description="Aplikasi web tugas akhir praktikum yang mengimplementasikan konsep database relasional, CRUD terstruktur, otentikasi, dan deployment cloud modern."
                  tag="Academic"
                  href="https://uas-web2-312410280-aflah-athallah.vercel.app"
                  hrefLabel="Buka uas-web2-312410280-aflah-athallah.vercel.app"
                  stats={[
                    { label: "Course", value: "Pemweb 2" },
                    { label: "Database", value: "Relational DB" },
                    { label: "Deployment", value: "Vercel Cloud" },
                  ]}
                />
              </div>
            </div>
          </section>
        )}

        {/* Footer */}
        <footer className="mt-28 border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>
            © 2026 CraftUI — Dibuat oleh <span className="text-zinc-300 font-medium">Aflah Athallah</span> sebagai portofolio Mahasiswa IT.
          </p>
          <div className="flex items-center gap-3">
            <span>Next.js 16</span>
            <span>•</span>
            <span>Tailwind v4</span>
            <span>•</span>
            <span>Framer Motion</span>
            <span>•</span>
            <span>TypeScript</span>
          </div>
        </footer>
      </main>
    </div>
  );
}
