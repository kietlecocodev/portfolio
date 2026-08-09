const CLIPS = [
  { src: "/videos/reel-01.mp4", poster: "/images/reel-01-poster.jpg", alt: "Rót cà phê sữa lên đá viên" },
  { src: "/videos/reel-02.mp4", poster: "/images/reel-02-poster.jpg", alt: "Rót cà phê lên dừa nạo và đá" },
  { src: "/videos/reel-03.mp4", poster: "/images/reel-03-poster.jpg", alt: "Đổ shot espresso vào ly" },
  { src: "/videos/reel-04.mp4", poster: "/images/reel-04-poster.jpg", alt: "Rót cà phê lên kem tươi trong ly" },
  { src: "/videos/reel-05.mp4", poster: "/images/reel-05-poster.jpg", alt: "Rắc nguyên liệu vào ly pha chế" },
];

export default function Reel() {
  return (
    <section id="reel" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <div className="mb-12">
          <span className="text-xs uppercase tracking-[0.25em] text-accent">
            Showreel
          </span>
          <h2 className="mt-4 max-w-lg font-display text-3xl italic leading-snug text-balance sm:text-4xl">
            Vài khoảnh khắc pha chế quay chậm
          </h2>
        </div>
      </div>

      <div className="flex gap-3 overflow-x-auto px-6 pb-4 sm:gap-4 sm:px-10 [&::-webkit-scrollbar]:hidden">
        {CLIPS.map((clip) => (
          <div
            key={clip.src}
            className="relative aspect-[2/3] w-[62vw] flex-none overflow-hidden sm:w-[280px]"
          >
            <video
              className="h-full w-full object-cover"
              src={clip.src}
              poster={clip.poster}
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              aria-label={clip.alt}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
