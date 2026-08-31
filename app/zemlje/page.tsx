import { dbConnect } from "@/lib/mongodb";
import { Vino } from "@/models/Vino";
import { FacetList } from "@/components/facet-list";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export default async function ZemljePage() {
  await dbConnect();
  const items = await Vino.aggregate([{ $group: { _id: "$zemlja", count: { $sum: 1 } } }, { $sort: { _id: 1 } }]);
  return <FacetList title="Zemlje" basePath="/zemlje" items={items.filter((x) => x._id).map((x) => ({ label: String(x._id), count: x.count }))} />;
}
