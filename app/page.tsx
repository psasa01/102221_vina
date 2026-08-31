export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-10">
        <header className="flex items-center justify-between border-b pb-6">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">Moja Kolekcija Vina</p>
            <h1 className="mt-2 text-4xl font-semibold tracking-tight">Kolekcija vina</h1>
          </div>
          <nav className="flex gap-4 text-sm text-neutral-600">
            <a href="/vina" className="hover:text-black">Vina</a>
            <a href="/zemlje" className="hover:text-black">Zemlje</a>
            <a href="/galerija" className="hover:text-black">Galerija</a>
            <a href="/forum" className="hover:text-black">Forum</a>
          </nav>
        </header>

        <section className="flex flex-1 items-center py-20">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-medium text-neutral-500">Nova verzija aplikacije</p>
            <h2 className="text-5xl font-semibold tracking-tight sm:text-6xl">Tvoja kolekcija vina, na jednom mjestu.</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
              Moderna verzija postojeće aplikacije koristi istu bazu i istu funkcionalnost, ali bez starog Node/Express/Webpack stacka.
            </p>
            <div className="mt-8 flex gap-3">
              <a href="/vina" className="rounded-lg bg-black px-5 py-3 text-sm font-medium text-white hover:bg-neutral-800">Otvori kolekciju</a>
              <a href="/pretraga" className="rounded-lg border px-5 py-3 text-sm font-medium hover:bg-neutral-50">Pretraži vina</a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
