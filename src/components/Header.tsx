const NAV_LINKS = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="absolute top-0 z-30 w-full">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 sm:px-10">
        <a
          href="#top"
          className="font-display text-lg tracking-wide text-foreground"
        >
          Kiet Le
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
          className="rounded-full border border-line px-4 py-2 text-xs tracking-wide text-foreground transition-colors hover:border-accent hover:text-accent"
        >
          Hợp tác
        </a>
      </div>
    </header>
  );
}
