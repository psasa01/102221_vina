import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { dbConnect } from "@/lib/mongodb";
import { readSession, sessionCookie } from "@/lib/session";
import { User } from "@/models/User";
import { Vino } from "@/models/Vino";
import Link from "next/link";

export const runtime="nodejs"; export const dynamic="force-dynamic";
export default async function MojaKolekcijaVinaPage(){
 const cookieStore=await cookies(); const uid=readSession(cookieStore.get(sessionCookie)?.value); if(!uid) redirect("/login");
 await dbConnect(); const user:any=await User.findById(uid).lean(); if(!user) redirect("/login");
 const vina:any[]=await Vino.find({$or:[{korisnik:user._id},{ime:user.ime}]}).sort({zemlja:1,naziv:1}).lean();
 return <main className="min-h-screen bg-stone-50"><div className="mx-auto max-w-7xl px-4 py-10"><div className="mb-8"><p className="text-sm uppercase tracking-[.18em] text-stone-500">Moja kolekcija</p><h1 className="mt-2 text-4xl font-semibold text-stone-900">{user.ime}</h1><p className="mt-2 text-sm text-stone-500">{vina.length} vina</p></div><div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">{vina.map(v=><Link key={v._id.toString()} href={`/vino/${v._id}`} className="overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm hover:-translate-y-1 hover:shadow-md"><div className="aspect-[3/4] bg-stone-100">{v.slika?<img src={v.slika} alt={v.naziv} className="h-full w-full object-cover"/>:null}</div><div className="p-4"><h2 className="font-medium">{v.naziv}</h2><p className="mt-1 text-sm text-stone-500">{v.proizvodjac}</p></div></Link>)}</div></div></main>
}