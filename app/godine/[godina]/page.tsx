import { dbConnect } from "@/lib/mongodb";
import { Vino } from "@/models/Vino";
import { FilteredVina } from "@/components/filtered-vina";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export default async function GodinaPage({ params }: { params: Promise<{ godina: string }> }) {
  const { godina } = await params; await dbConnect();
  const year = Number(godina);
  const vina = await Vino.find({ godina: Number.isFinite(year) ? year : -1 }).sort({ datum: -1 }).lean();
  return <FilteredVina title={`Godište: ${godina}`} vina={vina} />;
}
