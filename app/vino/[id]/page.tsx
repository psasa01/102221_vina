import Link from "next/link";
import { notFound } from "next/navigation";
import { dbConnect } from "@/lib/mongodb";
import { Vino } from "@/models/Vino";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export default async function VinoPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  await dbConnect();

  let vino;
  try {
    vino = await Vino.findById(id).lean();
  } catch {
    notFound();
  }
  if (!vino) notFound();

  return (
    <main className="min-h-screen bg-stone-50">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <Link href="/vina" className="text-sm font-medium text-stone-500 hover:text-stone-900">← Nazad na kolekciju</Link>
        <div className="mt-6 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.8fr)]">
          <div className="overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-sm">
            {vino.slika ? <img src={vino.slika} alt={vino.naziv} className="max-h-[720px] w-full object-contain" /> : <div className="flex aspect-[4/5] items-center justify-center text-stone-400">Nema slike</div>}
          </div>
          <section className="rounded-3xl border border-stone-200 bg-white p-7 shadow-sm">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-400">Vino</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-stone-900">{vino.naziv}</h1>
            <p className="mt-2 text-lg text-stone-500">{vino.proizvodjac}</p>
            <dl className="mt-8 divide-y divide-stone-100 border-y border-stone-100">
              {[["Zemlja", vino.zemlja], ["Vrsta", vino.vrsta], ["Godina", vino.godina], ["Alkohol", vino.alkohol], ["Veličina", vino.velicina]].map(([label, value]) => value ? <div key={String(label)} className="flex justify-between gap-6 py-4 text-sm"><dt className="text-stone-500">{label}</dt><dd className="text-right font-medium text-stone-900">{String(value)}</dd></div> : null)}
            </dl>
          </section>
        </div>
      </div>
    </main>
  );
}
