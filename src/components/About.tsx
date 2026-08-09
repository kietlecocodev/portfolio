const SPECIALTIES = [
  "Drink photography",
  "Brewing videos",
  "Ingredient stories",
  "Behind the scenes",
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24 sm:px-10 sm:py-32">
      <div className="grid gap-12 sm:grid-cols-[1fr_1.2fr] sm:gap-20">
        <div>
          <span className="text-xs uppercase tracking-[0.25em] text-accent">
            About me
          </span>
          <h2 className="mt-6 font-display text-3xl italic leading-snug text-balance sm:text-4xl">
            It all started with one cup of coffee
          </h2>
        </div>
        <div className="flex flex-col gap-8">
          <p className="text-balance leading-relaxed text-muted">
            I used to be just a regular guy who loved coffee and brewing.
            Somehow, making content about both turned into a whole path of
            its own, and honestly it still feels like a happy accident. These
            days I&apos;m leaning further into video production around
            brewing and drinks, because I want people to enjoy a cup that
            tastes as good as it looks, and actually feel something while
            watching it come together.
          </p>
          <ul className="grid grid-cols-2 gap-4 text-sm text-foreground">
            {SPECIALTIES.map((item) => (
              <li
                key={item}
                className="border-t border-line pt-3 tracking-wide"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
