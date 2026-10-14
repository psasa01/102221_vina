import { dbConnect } from "@/lib/mongodb";
import { Vino } from "@/models/Vino";
import { FilteredVina } from "@/components/filtered-vina";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export default async function VrstaPage({ params }: { params: Promise<{ vrsta: string }> }) {
  const { vrsta } = await params; await dbConnect();
  const vina = await Vino.find({ vrsta }).sort({ datum: -1 }).lean();
  return <FilteredVina title={`Vrsta: ${vrsta}`} vina={vina} />;
}
