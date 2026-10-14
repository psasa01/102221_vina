import Link from "next/link";

export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-stone-100 px-4 py-12">
      <div className="mx-auto max-w-md rounded-3xl border border-stone-200 bg-white p-8 shadow-sm sm:p-10">
        <Link href="/login" className="text-sm text-stone-500 hover:text-stone-900">← Prijava</Link>
        <h1 className="mt-6 text-3xl font-semibold tracking-tight text-stone-900">Registracija</h1>
        <p className="mt-2 text-sm text-stone-500">Kreirajte račun za svoju kolekciju vina.</p>
        <form action="/api/auth/register" method="post" className="mt-8 space-y-5">
          <label className="block"><span className="mb-2 block text-sm font-medium text-stone-700">Ime</span><input required name="ime" autoComplete="name" className="w-full rounded-xl border border-stone-300 px-4 py-3 outline-none focus:border-stone-700" /></label>
          <label className="block"><span className="mb-2 block text-sm font-medium text-stone-700">Email</span><input required type="email" name="email" autoComplete="email" className="w-full rounded-xl border border-stone-300 px-4 py-3 outline-none focus:border-stone-700" /></label>
          <label className="block"><span className="mb-2 block text-sm font-medium text-stone-700">Šifra</span><input required minLength={8} type="password" name="password" autoComplete="new-password" className="w-full rounded-xl border border-stone-300 px-4 py-3 outline-none focus:border-stone-700" /></label>
          <label className="block"><span className="mb-2 block text-sm font-medium text-stone-700">Ponovite šifru</span><input required minLength={8} type="password" name="passwordConfirm" autoComplete="new-password" className="w-full rounded-xl border border-stone-300 px-4 py-3 outline-none focus:border-stone-700" /></label>
          <button type="submit" className="w-full rounded-xl bg-stone-900 px-4 py-3 font-medium text-white hover:bg-stone-700">Registrujte se</button>
        </form>
      </div>
    </main>
  );
}
