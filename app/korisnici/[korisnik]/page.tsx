import { dbConnect } from "@/lib/mongodb";
import { Vino } from "@/models/Vino";
import { FilteredVina } from "@/components/filtered-vina";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export default async function KorisnikPage({ params }: { params: Promise<{ korisnik: string }> }) {
  const { korisnik } = await params; await dbConnect();
  const vina = await Vino.find({ ime: korisnik }).sort({ datum: -1 }).lean();
  return <FilteredVina title={`Vina korisnika: ${korisnik}`} vina={vina} />;
}
