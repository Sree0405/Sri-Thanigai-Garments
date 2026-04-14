import type { StaticImageData } from "next/image";

import heroFactory from "@/src/assets/hero-factory.jpg";
import fabricCutting from "@/src/assets/fabric-cutting.jpg";
import factoryFloor from "@/src/assets/factory-floor.jpg";
import mensWear from "@/src/assets/mens-wear.jpg";
import womensWear from "@/src/assets/womens-wear.jpg";
import kidsWear from "@/src/assets/kids-wear.jpg";

export interface TabItem {
id: string;
title: string;
image: StaticImageData | string;
description: string;
}

export const tabsData: TabItem[] = [
{
id: "sketch-design",
title: "Sketch & Design",
image: heroFactory,
description:
"The product lifecycle begins with an in-depth design and concept development phase where creative direction meets technical feasibility. Our team transforms initial ideas into structured sketches, incorporating fabric behavior, garment construction methods, and end-user functionality. Detailed design validation ensures alignment with brand identity, seasonal trends, and production constraints. This stage minimizes downstream errors by establishing a clear visual and technical foundation before sampling begins.",
},
{
id: "pattern-making",
title: "Pattern Making",
image: fabricCutting,
description:
"Pattern making is a critical engineering step where design concepts are converted into precise garment blueprints. Our skilled pattern masters develop base patterns and perform grading across multiple sizes while maintaining proportional accuracy and structural integrity. Each pattern undergoes validation for fit balance, seam allowances, and production efficiency. This ensures that garments retain consistent shape and quality across all sizes during bulk manufacturing.",
},
{
id: "cads-tech-pack",
title: "CADs & Tech Pack",
image: factoryFloor,
description:
"We create comprehensive technical documentation using advanced CAD systems to ensure seamless communication between design and production teams. The tech pack includes detailed measurements, construction specifications, stitching guidelines, trim details, labeling instructions, and finishing standards. This eliminates ambiguity during sampling and bulk production, enabling consistent output, reduced rework, and improved production timelines.",
},
{
id: "sample-fitting",
title: "Sample & Fitting",
image: womensWear,
description:
"Sampling and fitting serve as the validation phase where theoretical designs are tested in real-world conditions. Prototype garments are evaluated for fit accuracy, fabric drape, stitching quality, and overall aesthetic appeal. Fit sessions with models or mannequins help identify necessary adjustments in measurements, proportions, and construction techniques. Iterative refinements ensure the final garment meets both functional and visual standards before bulk production approval.",
},
{
id: "fabric-sourcing",
title: "Fabric & Sourcing",
image: mensWear,
description:
"Our sourcing process focuses on quality, consistency, and cost-efficiency by partnering with reliable vendors and mills. Fabrics and trims undergo rigorous evaluation for parameters such as GSM, durability, shrinkage, color fastness, and texture consistency. We ensure that every material aligns with product requirements and performance expectations, reducing production risks and ensuring uniformity across batches.",
},
{
id: "sewing-cutting",
title: "Sewing & Cutting",
image: factoryFloor,
description:
"The cutting and sewing preparation phase involves precise fabric spreading, marker planning, and panel cutting using optimized layouts to minimize wastage. Each step is monitored through quality checkpoints to ensure accuracy and consistency. Proper bundling and line preparation streamline workflow efficiency, ensuring that the production process begins with well-organized and defect-free components.",
},
{
id: "cutting-operations",
title: "Cutting Operations",
image: fabricCutting,
description:
"Cutting operations are executed with a focus on precision and efficiency. Marker optimization techniques are applied to maximize fabric utilization while maintaining pattern accuracy. Cut panels are systematically organized into bundles, labeled, and tracked to prevent mismatches. This structured approach ensures smooth transition to sewing operations and minimizes production errors.",
},
{
id: "sewing-operations",
title: "Sewing Operations",
image: kidsWear,
description:
"Our sewing operations are driven by skilled operators and streamlined assembly lines designed for consistency and productivity. Each garment passes through multiple stages with inline quality inspections to ensure stitch strength, alignment, and finishing standards. Advanced machinery and standardized workflows help maintain uniform quality while meeting production targets efficiently.",
},
{
id: "packing-finishing",
title: "Packing & Finishing",
image: heroFactory,
description:
"The final stage focuses on finishing, quality assurance, and packaging. Garments undergo thorough inspections including measurement verification, thread trimming, ironing, and defect checks. Each piece is finished according to client specifications and packaged using industry-standard methods to ensure protection during transit. This stage guarantees that every product delivered meets premium quality and presentation standards.",
},
];
