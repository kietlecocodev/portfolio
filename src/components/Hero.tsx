import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex h-screen min-h-[640px] w-full items-center justify-center overflow-hidden"
    >
      <Image
        src="/images/hero.jpg"
        alt="Cappuccino với bột quế, chụp cận cảnh từ trên xuống"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />

      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full border border-line/80 text-[11px] uppercase tracking-[0.2em] text-accent">
          Est. VN
        </span>
        <h1 className="mt-8 max-w-3xl font-display text-4xl italic leading-tight text-balance text-foreground sm:text-6xl">
          Where Flavor Meets Frame
        </h1>
        <p className="mt-6 max-w-xl text-balance text-sm leading-relaxed text-muted sm:text-base">
          Mình quay & chụp nội dung cà phê, đồ uống theo phong cách điện ảnh —
          ấm áp, chân thực, sẵn sàng cho các thương hiệu F&amp;B muốn kể câu
          chuyện qua từng khung hình.
        </p>
        <a
          href="#work"
          className="mt-10 rounded-full border border-accent/60 px-6 py-3 text-xs uppercase tracking-[0.15em] text-accent transition-colors hover:bg-accent hover:text-background"
        >
          Xem portfolio
        </a>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-[10px] uppercase tracking-[0.3em] text-muted">
        Scroll
      </div>
    </section>
  );
}
