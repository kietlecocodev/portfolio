import Image from "next/image";

export default function Process() {
  return (
    <section id="process" className="mx-auto max-w-6xl px-6 py-24 sm:px-10 sm:py-32">
      <span className="text-xs uppercase tracking-[0.25em] text-accent">
        Behind the Scenes
      </span>
      <h2 className="mt-4 max-w-lg font-display text-3xl italic leading-snug text-balance sm:text-4xl">
        Small setup, careful light, always on time
      </h2>

      <div className="mt-14 grid gap-4 sm:grid-cols-2">
        <div className="relative aspect-[3/2] overflow-hidden">
          <Image
            src="/images/bts-01.jpg"
            alt="Corner of the shooting table with lights, candles, and brewing tools"
            fill
            sizes="(max-width: 640px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div className="relative aspect-[3/2] overflow-hidden">
          <Image
            src="/images/bts-02.jpg"
            alt="Gimbal camera close-up while shooting B-roll"
            fill
            sizes="(max-width: 640px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>

      <div className="mt-14 grid gap-8 border-t border-line pt-10 sm:grid-cols-3">
        {[
          {
            step: "01",
            title: "Chat about the brief",
            desc: "Getting a feel for the concept, product, and your brand's colors before we shoot.",
          },
          {
            step: "02",
            title: "Shoot & style the scene",
            desc: "Warm natural light, macro lens, gimbal for smooth movement.",
          },
          {
            step: "03",
            title: "Edit & deliver",
            desc: "Consistent color grading, files optimized for social and web.",
          },
        ].map((item) => (
          <div key={item.step}>
            <span className="font-display text-sm italic text-accent">
              {item.step}
            </span>
            <h3 className="mt-2 text-lg text-foreground">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
