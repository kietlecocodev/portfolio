export default function Footer() {
  return (
    <footer className="border-t border-line px-6 py-8 sm:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-xs text-muted sm:flex-row">
        <span>© {new Date().getFullYear()} Kiet Le. All rights reserved.</span>
        <span>Coffee &amp; beverage content, made in Vietnam.</span>
      </div>
    </footer>
  );
}
