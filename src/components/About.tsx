const SPECIALTIES = [
  "Product & drink macro",
  "Cinematic B-roll",
  "Ingredient storytelling",
  "Behind-the-scenes",
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24 sm:px-10 sm:py-32">
      <div className="grid gap-12 sm:grid-cols-[1fr_1.2fr] sm:gap-20">
        <div>
          <span className="text-xs uppercase tracking-[0.25em] text-accent">
            Về mình
          </span>
          <h2 className="mt-6 font-display text-3xl italic leading-snug text-balance sm:text-4xl">
            Kể chuyện đồ uống bằng ánh sáng &amp; chi tiết
          </h2>
        </div>
        <div className="flex flex-col gap-8">
          <p className="text-balance leading-relaxed text-muted">
            Mình là content creator tập trung vào nhiếp ảnh &amp; quay dựng đồ
            uống — từ cà phê phin truyền thống đến specialty coffee. Mỗi
            khung hình được dựng theo tông màu ấm, ánh sáng dịu và góc cận
            cảnh để làm nổi bật kết cấu, hơi nóng và cảm xúc của từng ly đồ
            uống.
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
