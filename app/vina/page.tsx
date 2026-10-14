import Link from "next/link";
import { dbConnect } from "@/lib/mongodb";
import { Vino } from "@/models/Vino";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export default async function VinaPage() {
  await dbConnect();
  const vina = await Vino.find({}).sort({ datum: -1 }).lean();

  return (
    <main className="min-h-screen bg-stone-50">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">Moja Kolekcija Vina</p>
            <h1 className="mt-2 text-4xl font-semibold tracking-tight text-stone-900">Kolekcija vina</h1>
            <p className="mt-2 text-sm text-stone-500">{vina.length} vina u kolekciji</p>
          </div>
          <Link href="/pretraga" className="rounded-lg border border-stone-300 bg-white px-4 py-2 text-sm font-medium text-stone-800 shadow-sm hover:bg-stone-100">Pretraži</Link>
        </div>

        {vina.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-stone-300 bg-white p-12 text-center text-stone-500">Nema vina za prikaz.</div>
        ) : (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {vina.map((vino) => (
              <Link key={vino._id.toString()} href={`/vino/${vino._id.toString()}`} className="group overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="aspect-[3/4] overflow-hidden bg-stone-100">
                  {vino.slika ? (
                    <img src={vino.slika} alt={vino.naziv} className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]" />
                  ) : (
                    <div className="flex h-full items-center justify-center p-5 text-center text-sm text-stone-400">Nema slike</div>
                  )}
                </div>
                <div className="p-4">
                  <h2 className="line-clamp-2 font-medium text-stone-900">{vino.naziv}</h2>
                  <p className="mt-1 truncate text-sm text-stone-500">{vino.proizvodjac}</p>
                  <div className="mt-3 flex items-center justify-between text-xs text-stone-400">
                    <span>{vino.zemlja}</span>
                    {vino.godina ? <span>{vino.godina}</span> : null}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
