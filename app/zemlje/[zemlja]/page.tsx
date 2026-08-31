import { dbConnect } from "@/lib/mongodb";
import { Vino } from "@/models/Vino";
import { FilteredVina } from "@/components/filtered-vina";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export default async function ZemljaPage({ params }: { params: Promise<{ zemlja: string }> }) {
  const { zemlja } = await params; await dbConnect();
  const vina = await Vino.find({ zemlja }).sort({ datum: -1 }).lean();
  return <FilteredVina title={`Vina iz zemlje: ${zemlja}`} vina={vina} />;
}
