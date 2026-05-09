import type { StaticImageData } from "next/image";

// Existing imports
import checkingStation from "@/src/assets/images/checking-station.jpg";

// Related production/process images
import alterationArea from "@/src/assets/images/alterationArea.jpg";
import cartonStorage from "@/src/assets/images/cartonStorage.jpg";
import clotheCollection from "@/src/assets/images/clotheCollection.jpg";
import cuttingstorage from "@/src/assets/images/cuttingstorage.jpg";
import fabricChecking from "@/src/assets/images/fabricChecking.jpg";
import fusingMachine from "@/src/assets/images/fusingMachine.jpg";
import inspectionRoom from "@/src/assets/images/inspectionRoom.jpg";
import ironingArea from "@/src/assets/images/ironingArea.jpg";
import layTable from "@/src/assets/images/layTable.jpg";
import packagingArea from "@/src/assets/images/packaging-area.jpg";
import productionArea from "@/src/assets/images/production-area.jpg";
import production2 from "@/src/assets/images/production2.jpg";
import production3 from "@/src/assets/images/production3.jpg";
import production4 from "@/src/assets/images/production4.jpg";
import reFoldingArea from "@/src/assets/images/reFoldingArea.jpg";
import sampleCloth from "@/src/assets/images/sampleCloth.jpg";

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
    image: sampleCloth,
    description:
      "The product lifecycle begins with an in-depth design and concept development phase where creative direction meets technical feasibility...",
  },

  {
    id: "pattern-making",
    title: "Pattern Making",
    image: layTable,
    description:
      "Pattern making is a critical engineering step where design concepts are converted into precise garment blueprints...",
  },

  {
    id: "cads-tech-pack",
    title: "CADs & Tech Pack",
    image: checkingStation,
    description:
      "We create comprehensive technical documentation using advanced CAD systems...",
  },

  {
    id: "sample-fitting",
    title: "Sample & Fitting",
    image: alterationArea,
    description:
      "Sampling and fitting serve as the validation phase where theoretical designs are tested...",
  },

  {
    id: "fabric-sourcing",
    title: "Fabric & Sourcing",
    image: fabricChecking,
    description:
      "Our sourcing process focuses on quality, consistency, and cost-efficiency...",
  },

  {
    id: "sewing-cutting",
    title: "Sewing & Cutting",
    image: cuttingstorage,
    description:
      "The cutting and sewing preparation phase involves precise fabric spreading...",
  },

  {
    id: "cutting-operations",
    title: "Cutting Operations",
    image: productionArea,
    description:
      "Cutting operations are executed with a focus on precision and efficiency...",
  },

  {
    id: "sewing-operations",
    title: "Sewing Operations",
    image: production2,
    description:
      "Our sewing operations are driven by skilled operators and streamlined assembly lines...",
  },

  {
    id: "packing-finishing",
    title: "Packing & Finishing",
    image: packagingArea,
    description:
      "The final stage focuses on finishing, quality assurance, and packaging...",
  },
];