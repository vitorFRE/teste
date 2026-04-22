import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/70 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:py-4">
        <Link
          href="/"
          className="shrink-0 text-lg font-bold tracking-tight text-white"
        >
          ASIMOV
        </Link>

        <Link
          href="#matricula"
          className="inline-flex h-10 shrink-0 items-center rounded-full bg-brand-cyan px-5 text-sm font-semibold text-black transition-opacity hover:opacity-90"
        >
          Matricule-se
        </Link>
      </div>
    </header>
  );
}
