import Link from "next/link";

export default function ResetPage() {
  return (
    <main className="min-h-screen bg-stone-100 px-4 py-12">
      <div className="mx-auto max-w-md rounded-3xl border border-stone-200 bg-white p-8 shadow-sm sm:p-10">
        <Link href="/login" className="text-sm text-stone-500 hover:text-stone-900">← Prijava</Link>
        <h1 className="mt-6 text-3xl font-semibold tracking-tight text-stone-900">Reset šifre</h1>
        <p className="mt-2 text-sm text-stone-500">Unesite email adresu i poslat ćemo vam upute za promjenu šifre.</p>
        <form action="/api/auth/reset" method="post" className="mt-8 space-y-5">
          <label className="block"><span className="mb-2 block text-sm font-medium text-stone-700">Email</span><input required type="email" name="email" autoComplete="email" className="w-full rounded-xl border border-stone-300 px-4 py-3 outline-none focus:border-stone-700" /></label>
          <button type="submit" className="w-full rounded-xl bg-stone-900 px-4 py-3 font-medium text-white hover:bg-stone-700">Pošalji upute</button>
        </form>
      </div>
    </main>
  );
}
