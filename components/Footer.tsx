export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-center text-sm text-slate-500 sm:flex-row sm:text-left">
        <p>&copy; {new Date().getFullYear()} BrightDesk AI. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="mailto:hello@example.com" className="transition hover:text-primary-600">
            hello@example.com
          </a>
          <a href="tel:+1234567890" className="transition hover:text-primary-600">
            (123) 456-7890
          </a>
        </div>
      </div>
    </footer>
  );
}
