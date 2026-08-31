import { dbConnect } from "@/lib/mongodb";
import { Vino } from "@/models/Vino";
import { FacetList } from "@/components/facet-list";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export default async function GodinePage() {
  await dbConnect();
  const items = await Vino.aggregate([{ $match: { godina: { $ne: null } } }, { $group: { _id: "$godina", count: { $sum: 1 } } }, { $sort: { _id: -1 } }]);
  return <FacetList title="Godišta" basePath="/godine" items={items.map((x) => ({ label: String(x._id), count: x.count }))} />;
}
