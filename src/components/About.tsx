const SPECIALTIES = [
  "Chụp ảnh đồ uống",
  "Quay video pha chế",
  "Kể chuyện nguyên liệu",
  "Hậu trường sản xuất",
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
            Từ một tách cà phê đến một cơ duyên
          </h2>
        </div>
        <div className="flex flex-col gap-8">
          <p className="text-balance leading-relaxed text-muted">
            Mình bắt đầu chỉ là một người bình thường yêu thích cà phê và pha
            chế. Việc trở thành người sáng tạo nội dung về hai thứ này, với
            mình, là một cơ duyên. Hiện tại mình đang muốn lấn sân thêm sang
            mảng sản xuất video về pha chế và đồ uống, để giúp mọi người vừa
            có một ly đồ uống ngon miệng, vừa ngon mắt, và mang lại nhiều
            cảm xúc cho người xem.
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
