import Link from "next/link";
import type { VinoDocument } from "@/models/Vino";

export function FilteredVina({ title, vina }: { title: string; vina: VinoDocument[] }) {
  return (
    <main className="min-h-screen bg-stone-50">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <Link href="/vina" className="text-sm font-medium text-stone-500 hover:text-stone-900">← Kolekcija vina</Link>
        <div className="mt-5 flex items-end justify-between gap-4"><div><h1 className="text-4xl font-semibold tracking-tight text-stone-900">{title}</h1><p className="mt-2 text-sm text-stone-500">{vina.length} vina</p></div><Link href="/pretraga" className="rounded-lg border border-stone-300 bg-white px-4 py-2 text-sm font-medium">Pretraži</Link></div>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {vina.map((vino) => <Link key={vino._id.toString()} href={`/vino/${vino._id.toString()}`} className="group overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"><div className="aspect-[3/4] overflow-hidden bg-stone-100">{vino.slika ? <img src={vino.slika} alt={vino.naziv} className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]" /> : <div className="flex h-full items-center justify-center text-sm text-stone-400">Nema slike</div>}</div><div className="p-4"><h2 className="line-clamp-2 font-medium text-stone-900">{vino.naziv}</h2><p className="mt-1 truncate text-sm text-stone-500">{vino.proizvodjac}</p><div className="mt-3 flex justify-between text-xs text-stone-400"><span>{vino.zemlja}</span>{vino.godina ? <span>{vino.godina}</span> : null}</div></div></Link>)}
        </div>
        {vina.length === 0 && <div className="mt-8 rounded-2xl border border-dashed border-stone-300 bg-white p-12 text-center text-stone-500">Nema vina za ovaj filter.</div>}
      </div>
    </main>
  );
}
