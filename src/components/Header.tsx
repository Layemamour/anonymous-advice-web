"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Comment ça marche", href: "#how-it-works" },
    { label: "Fonctionnalités", href: "#features" },
    { label: "Premium", href: "#premium" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 backdrop-blur-md transition-shadow ${
        scrolled
          ? "bg-surface/85 shadow-[0_1px_0_0_rgba(0,0,0,0.06)]"
          : "bg-surface/0"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-lg font-semibold tracking-tight">
          Kay<span className="text-premium">Confesser</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-ink/70 hover:text-ink transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

          <a
           href="#download"
          className="hidden md:inline-flex items-center rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-surface hover:scale-105 hover:shadow-lg transition-all"
        >
          Télécharger
        </a>

        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          <div className="w-6 h-0.5 bg-ink mb-1.5" />
          <div className="w-6 h-0.5 bg-ink mb-1.5" />
          <div className="w-6 h-0.5 bg-ink" />
        </button>
      </div>

      {open && (
        <nav className="md:hidden flex flex-col gap-1 px-6 pb-4 bg-surface">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-2 text-sm text-ink/70"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#download"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-surface"
          >
            Télécharger
          </a>
        </nav>
      )}
    </header>
  );
}