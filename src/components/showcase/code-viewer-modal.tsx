"use client";

import React, { useState } from "react";
import { Check, Copy, X, Code2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface CodeViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  code: string;
}

export function CodeViewerModal({
  isOpen,
  onClose,
  title,
  code,
}: CodeViewerModalProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy", err);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.2 }}
            className="relative flex max-h-[85vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-3.5 bg-zinc-900/60">
              <div className="flex items-center gap-2.5">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  <Code2 className="h-4 w-4" />
                </div>
                <h3 className="text-sm font-medium text-zinc-100">{title}</h3>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-zinc-800/80 px-3 py-1.5 text-xs font-medium text-zinc-200 transition-colors hover:border-white/20 hover:bg-zinc-700 hover:text-white"
                >
                  {copied ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
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

            {/* Code Body */}
            <div className="overflow-y-auto p-5 font-mono text-xs text-zinc-300 bg-[#0d0d11]">
              <pre className="overflow-x-auto leading-relaxed whitespace-pre-wrap">
                <code>{code}</code>
              </pre>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
