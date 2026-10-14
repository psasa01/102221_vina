import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-6 px-4 sm:px-6">
        <Link href="/mojaKolekcijaVina" className="shrink-0 font-semibold tracking-tight">Moja Kolekcija Vina</Link>
        <nav className="hidden items-center gap-5 text-sm text-neutral-600 md:flex">
          <Link href="/vina" className="hover:text-black">Vina</Link>
          <Link href="/galerija" className="hover:text-black">Galerija</Link>
          <Link href="/zemlje" className="hover:text-black">Zemlje</Link>
          <Link href="/vrste" className="hover:text-black">Vrste</Link>
          <Link href="/korisnici" className="hover:text-black">Korisnici</Link>
          <Link href="/godine" className="hover:text-black">Godine</Link>
          <Link href="/zadnjeDodani" className="hover:text-black">Najnovija vina</Link>
          <Link href="/forum" className="hover:text-black">Forum</Link>
        </nav>
        <div className="ml-auto flex items-center gap-3 text-sm">
          <Link href="/pretraga" className="rounded-md border px-3 py-2 hover:bg-neutral-50">Pretraga</Link>
          <Link href="/login" className="rounded-md bg-black px-3 py-2 text-white hover:bg-neutral-800">Prijava</Link>
        </div>
      </div>
    </header>
  );
}
