import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-stone-100 px-4 py-12">
      <div className="mx-auto max-w-md rounded-3xl border border-stone-200 bg-white p-8 shadow-sm sm:p-10">
        <div className="mb-8">
          <Link href="/" className="text-sm text-stone-500 hover:text-stone-900">← Početna</Link>
          <h1 className="mt-6 text-3xl font-semibold tracking-tight text-stone-900">Prijava</h1>
          <p className="mt-2 text-sm text-stone-500">Prijavite se u svoju kolekciju vina.</p>
        </div>
        <form action="/api/auth/login" method="post" className="space-y-5">
          <label className="block"><span className="mb-2 block text-sm font-medium text-stone-700">Email</span><input required type="email" name="email" autoComplete="email" className="w-full rounded-xl border border-stone-300 px-4 py-3 outline-none focus:border-stone-700" /></label>
          <label className="block"><span className="mb-2 block text-sm font-medium text-stone-700">Šifra</span><input required type="password" name="password" autoComplete="current-password" className="w-full rounded-xl border border-stone-300 px-4 py-3 outline-none focus:border-stone-700" /></label>
          <button type="submit" className="w-full rounded-xl bg-stone-900 px-4 py-3 font-medium text-white transition hover:bg-stone-700">Prijava</button>
        </form>
        <div className="mt-6 flex justify-between text-sm"><Link href="/reset" className="text-stone-500 hover:text-stone-900">Zaboravili ste šifru?</Link><Link href="/register" className="font-medium text-stone-900">Registrujte se</Link></div>
        <div className="mt-8 grid grid-cols-2 gap-3 border-t border-stone-200 pt-6"><Link href="/api/auth/google" className="rounded-xl border border-stone-300 px-4 py-3 text-center text-sm font-medium hover:bg-stone-50">Google</Link><Link href="/api/auth/facebook" className="rounded-xl border border-stone-300 px-4 py-3 text-center text-sm font-medium hover:bg-stone-50">Facebook</Link></div>
      </div>
    </main>
  );
}
