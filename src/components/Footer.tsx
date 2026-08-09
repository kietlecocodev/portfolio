export default function Footer() {
  return (
    <footer className="border-t border-line px-6 py-8 sm:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-xs text-muted sm:flex-row">
        <span>© {new Date().getFullYear()} 5 Phút Cà Phê. Thành lập năm 2023.</span>
        <span>Nội dung cà phê &amp; đồ uống, thực hiện tại Việt Nam.</span>
      </div>
    </footer>
  );
}
