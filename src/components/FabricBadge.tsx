import Link from "next/link";
import { Fabric } from "@/src/data/fabrics";

interface FabricBadgeProps {
  fabric: Fabric;
  linked?: boolean;
}

const FabricBadge = ({ fabric, linked = true }: FabricBadgeProps) => {
  const content = (
    <span className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full bg-primary/10 text-primary font-medium hover:bg-primary/20 transition-colors">
      {fabric.name}
    </span>
  );

  if (linked) {
    return <Link to={`/fabrics/${fabric.slug}`}>{content}</Link>;
  }

  return content;
};

export default FabricBadge;
