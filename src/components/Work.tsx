import Image from "next/image";
import { blurDataMap } from "@/lib/blur-data";

const WORKS = [
  { src: "/images/work-05.jpg", alt: "Close-up of iced coffee with foam and a large ice cube" },
  { src: "/images/work-01.jpg", alt: "Iced coffee glass with a square ice cube, warm tones" },
  { src: "/images/work-06.jpg", alt: "Vietnamese coffee pod on a wooden table" },
  { src: "/images/work-03.jpg", alt: "Milk pouring from a glass pitcher, shot from above" },
  { src: "/images/work-04.jpg", alt: "Steel pitcher with coffee foam" },
  { src: "/images/work-02.jpg", alt: "Iced coffee close-up with camera gear in the background" },
  { src: "/images/work-07.jpg", alt: "Cold brew garnished with a lemon slice" },
  { src: "/images/work-08.jpg", alt: "Whipping cream carton and brewing ingredients" },
];

export default function Work() {
  return (
    <section id="work" className="bg-black/20 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <div className="mb-16 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-accent">
              The Work
            </span>
            <h2 className="mt-4 font-display text-3xl italic sm:text-4xl">
              A few recent frames
            </h2>
          </div>
          <p className="max-w-xs text-sm text-muted">
            Macro and product shots from recent shoots. I&apos;m always happy
            to build out a full set around your brand&apos;s brief.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {WORKS.map((item) => (
            <div
              key={item.src}
              className="group relative aspect-[3/2] overflow-hidden"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 50vw, 25vw"
                loading="lazy"
                placeholder="blur"
                blurDataURL={blurDataMap[item.src]}
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
