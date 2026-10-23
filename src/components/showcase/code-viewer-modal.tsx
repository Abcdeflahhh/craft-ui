"use client";

import React, { useState } from "react";
import { Check, Copy, X, Code2, Download, Terminal, Layers } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface CodeViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  code: string;
  usageCode?: string;
}

export function CodeViewerModal({
  isOpen,
  onClose,
  title,
  code,
  usageCode,
}: CodeViewerModalProps) {
  const [activeTab, setActiveTab] = useState<"component" | "usage">("component");
  const [copied, setCopied] = useState(false);

  const currentCode = activeTab === "usage" && usageCode ? usageCode : code;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(currentCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy", err);
    }
  };

  const handleDownload = () => {
    const filename = `${title.toLowerCase().replace(/[^a-z0-9]/g, "-")}-${activeTab}.tsx`;
    const blob = new Blob([currentCode], { type: "text/typescript;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    link.click();
    URL.revokeObjectURL(url);
  };

  const lineCount = currentCode.split("\n").length;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 15 }}
            transition={{ duration: 0.2 }}
            className="relative flex max-h-[88vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0d0d12] shadow-2xl"
          >
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/10 px-5 py-3.5 bg-zinc-900/70 gap-3">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  <Code2 className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-zinc-100 flex items-center gap-2">
                    {title}
                    <span className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] font-mono font-normal text-zinc-400">
                      TSX • {lineCount} lines
                    </span>
                  </h3>
                </div>
              </div>

              {/* Actions & Tab Switcher */}
              <div className="flex items-center gap-2 self-end sm:self-auto">
                {usageCode && (
                  <div className="flex items-center rounded-lg bg-zinc-800/80 p-0.5 border border-white/10 text-xs">
                    <button
                      onClick={() => setActiveTab("component")}
                      className={`flex items-center gap-1.5 rounded-md px-2.5 py-1 transition-all ${
                        activeTab === "component"
                          ? "bg-indigo-600 text-white font-medium shadow-sm"
                          : "text-zinc-400 hover:text-zinc-200"
                      }`}
                    >
                      <Layers className="h-3 w-3" />
                      <span>Component</span>
                    </button>
                    <button
                      onClick={() => setActiveTab("usage")}
                      className={`flex items-center gap-1.5 rounded-md px-2.5 py-1 transition-all ${
                        activeTab === "usage"
                          ? "bg-indigo-600 text-white font-medium shadow-sm"
                          : "text-zinc-400 hover:text-zinc-200"
                      }`}
                    >
                      <Terminal className="h-3 w-3" />
                      <span>Usage</span>
                    </button>
                  </div>
                )}

                <button
                  onClick={handleDownload}
                  title="Download File"
                  className="rounded-lg border border-white/10 bg-zinc-800/80 p-2 text-zinc-300 transition-colors hover:border-white/20 hover:bg-zinc-700 hover:text-white"
                >
                  <Download className="h-3.5 w-3.5" />
                </button>

                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-zinc-800/80 px-3 py-1.5 text-xs font-medium text-zinc-200 transition-colors hover:border-white/20 hover:bg-zinc-700 hover:text-white"
                >
                  {copied ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-semibold">Disalin!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5 text-zinc-400" />
                      <span>Copy Code</span>
                    </>
                  )}
                </button>

                <button
                  onClick={onClose}
                  className="rounded-lg p-1.5 text-zinc-400 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Code Body with line numbers */}
            <div className="relative flex-1 overflow-y-auto p-4 sm:p-5 font-mono text-xs text-zinc-300 bg-[#09090e]">
              <div className="flex gap-4">
                {/* Line Numbers */}
                <div
                  aria-hidden="true"
                  className="select-none text-right font-mono text-zinc-600 border-r border-white/10 pr-3"
                >
                  {currentCode.split("\n").map((_, i) => (
                    <div key={i} className="leading-6">
                      {i + 1}
                    </div>
                  ))}
                </div>

                {/* Code Text */}
                <pre className="flex-1 overflow-x-auto leading-6">
                  <code>{currentCode}</code>
                </pre>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
