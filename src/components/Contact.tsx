export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-line px-6 py-24 text-center sm:py-32"
    >
      <span className="text-xs uppercase tracking-[0.25em] text-accent">
        Let&apos;s work together
      </span>
      <h2 className="mx-auto mt-6 max-w-2xl text-balance font-display text-3xl italic leading-snug sm:text-5xl">
        Got an idea for your brand? I&apos;d love to hear it.
      </h2>
      <a
        href="mailto:hello@yourdomain.com"
        className="mt-10 inline-block text-lg tracking-wide text-foreground underline decoration-accent/60 underline-offset-8 transition-colors hover:text-accent"
      >
        hello@yourdomain.com
      </a>
      <div className="mt-8 flex items-center justify-center gap-6 text-sm uppercase tracking-[0.2em] text-muted">
        <a href="#" className="transition-colors hover:text-accent">
          Instagram
        </a>
        <a href="#" className="transition-colors hover:text-accent">
          TikTok
        </a>
      </div>
    </section>
  );
}
