export default function Footer() {
  return (
    <footer className="border-t border-line px-6 py-8 sm:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-xs text-muted sm:flex-row">
        <span>© {new Date().getFullYear()} 5 Phút Cà Phê. Since 2023.</span>
        <span>Coffee &amp; drink content, made in Vietnam.</span>
      </div>
    </footer>
  );
}
