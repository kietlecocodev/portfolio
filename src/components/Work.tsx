import Image from "next/image";

const WORKS = [
  { src: "/images/work-05.jpg", alt: "Cà phê sữa đá, kem foam và đá viên chụp cận cảnh" },
  { src: "/images/work-01.jpg", alt: "Ly cà phê đá với viên đá vuông, tông màu ấm" },
  { src: "/images/work-06.jpg", alt: "Viên nén cà phê Việt Nam trên bàn gỗ" },
  { src: "/images/work-03.jpg", alt: "Rót sữa từ bình thủy tinh, góc quay từ trên xuống" },
  { src: "/images/work-04.jpg", alt: "Bình pha cà phê inox với bọt cà phê" },
  { src: "/images/work-02.jpg", alt: "Ly cà phê đá quay cận cảnh với thiết bị máy quay phía sau" },
  { src: "/images/work-07.jpg", alt: "Cold brew với lát chanh trang trí" },
  { src: "/images/work-08.jpg", alt: "Hộp kem whipping và nguyên liệu pha chế" },
];

export default function Work() {
  return (
    <section id="work" className="bg-black/20 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <div className="mb-16 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-accent">
              Tác phẩm
            </span>
            <h2 className="mt-4 font-display text-3xl italic sm:text-4xl">
              Một vài khung hình gần đây
            </h2>
          </div>
          <p className="max-w-xs text-sm text-muted">
            Ảnh macro và sản phẩm từ các buổi quay của 5 Phút Cà Phê, có thể
            mở rộng thành bộ ảnh đầy đủ theo brief riêng của từng thương
            hiệu.
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
