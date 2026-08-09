import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex h-screen min-h-[640px] w-full items-center justify-center overflow-hidden"
    >
      <Image
        src="/images/hero.jpg"
        alt="Top-down shot of a cappuccino dusted with cinnamon"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />

      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full border border-line/80 text-center text-[10px] uppercase leading-tight tracking-[0.1em] text-accent">
          Since 2023
        </span>
        <h1 className="mt-8 max-w-3xl font-display text-4xl italic leading-tight text-balance text-foreground sm:text-6xl">
          Where Flavor Meets Frame
        </h1>
        <a
          href="#work"
          className="mt-10 rounded-full border border-accent/60 px-6 py-3 text-xs uppercase tracking-[0.15em] text-accent transition-colors hover:bg-accent hover:text-background"
        >
          See my work
        </a>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-[10px] uppercase tracking-[0.3em] text-muted">
        Scroll
      </div>
    </section>
  );
}
