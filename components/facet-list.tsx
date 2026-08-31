import Link from "next/link";

export function FacetList({ title, items, basePath }: { title: string; items: { label: string; count: number }[]; basePath: string }) {
  return (
    <main className="min-h-screen bg-stone-50">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">Moja Kolekcija Vina</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight text-stone-900">{title}</h1>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <Link key={item.label} href={`${basePath}/${encodeURIComponent(item.label)}`} className="flex items-center justify-between rounded-xl border border-stone-200 bg-white px-5 py-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
              <span className="font-medium text-stone-900">{item.label}</span>
              <span className="rounded-full bg-stone-100 px-2.5 py-1 text-xs text-stone-500">{item.count}</span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
