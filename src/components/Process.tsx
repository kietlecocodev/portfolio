import Image from "next/image";

export default function Process() {
  return (
    <section id="process" className="mx-auto max-w-6xl px-6 py-24 sm:px-10 sm:py-32">
      <span className="text-xs uppercase tracking-[0.25em] text-accent">
        Behind the Scenes
      </span>
      <h2 className="mt-4 max-w-lg font-display text-3xl italic leading-snug text-balance sm:text-4xl">
        Setup gọn, ánh sáng kỹ, đúng deadline
      </h2>

      <div className="mt-14 grid gap-4 sm:grid-cols-2">
        <div className="relative aspect-[3/2] overflow-hidden">
          <Image
            src="/images/bts-01.jpg"
            alt="Góc bàn quay setup với đèn, nến và dụng cụ pha cà phê"
            fill
            sizes="(max-width: 640px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div className="relative aspect-[3/2] overflow-hidden">
          <Image
            src="/images/bts-02.jpg"
            alt="Máy quay gimbal cận cảnh trong lúc quay B-roll"
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
            title: "Trao đổi brief",
            desc: "Hiểu concept, sản phẩm và tông màu thương hiệu trước khi lên set.",
          },
          {
            step: "02",
            title: "Quay & dựng cảnh",
            desc: "Ánh sáng tự nhiên/ấm, macro lens, gimbal cho chuyển động mượt.",
          },
          {
            step: "03",
            title: "Hậu kỳ & bàn giao",
            desc: "Color grade nhất quán, xuất file tối ưu cho social & web.",
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
