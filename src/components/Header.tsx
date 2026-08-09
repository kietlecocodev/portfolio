"use client";

import { useState } from "react";

const NAV_LINKS = [
  { href: "#work", label: "Work" },
  { href: "#reel", label: "Video" },
  { href: "#about", label: "About" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="absolute top-0 z-30 w-full">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 sm:px-10">
        <a
          href="#top"
          className="font-display text-lg tracking-wide text-foreground"
        >
          5 Phút Cà Phê
        </a>
        <nav className="hidden gap-8 text-sm tracking-wide text-muted sm:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden rounded-full border border-line px-4 py-2 text-xs tracking-wide text-foreground transition-colors hover:border-accent hover:text-accent sm:inline-block"
        >
          Let&apos;s talk
        </a>
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 sm:hidden"
        >
          <span className="h-px w-5 bg-foreground" />
          <span className="h-px w-5 bg-foreground" />
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-background">
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            className="absolute right-6 top-6 flex h-9 w-9 items-center justify-center text-2xl text-foreground"
          >
            &times;
          </button>
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="font-display text-2xl italic text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="mt-4 rounded-full border border-accent/60 px-6 py-3 text-xs uppercase tracking-[0.15em] text-accent"
          >
            Let&apos;s talk
          </a>
        </div>
      )}
    </header>
  );
}
