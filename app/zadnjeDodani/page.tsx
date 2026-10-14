import { dbConnect } from "@/lib/mongodb";
import { Vino } from "@/models/Vino";
import { FilteredVina } from "@/components/filtered-vina";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export default async function ZadnjeDodaniPage() {
  await dbConnect();
  const vina = await Vino.find({}).sort({ datum: -1 }).limit(20).lean();
  return <FilteredVina title="Najnovija vina" vina={vina} />;
}
