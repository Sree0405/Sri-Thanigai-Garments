import { readItems } from "@directus/sdk";
import { directus } from "@/src/lib/api";

import { getImage } from "../hooks/getImage";

export interface GalleryItem {
  id: number | string;
  title: string;
  category: string;
  images: any;
}

/*
|--------------------------------------------------------------------------
| Local Image Mapping
|--------------------------------------------------------------------------
|
| Every image now contains:
| - id
| - title
| - category
| - images
|
*/

const imageCollections = () => {
  const {
    ButtonArea,
    cartonStorage,
    checkingStation,
    clotheCollection,
    cuttingstorage,
    director,
    fabricChecking,
    fabricChecking2,
    fusingMachine,
    inspectionRoom,
    ironingArea,
    IroningArea2,
    layTable,
    layTable2,
    OrderPackages,
    packagingArea,
    productionArea,
    production2,
    production3,
    production4,
    reFoldingArea,
    sampleCloth,
    sampleCloth2,
    sampleCloth3,
    alterationArea,
  } = getImage();

  return [
    // Production
    {
      id: "production-1",
      title: "Production Area",
      category: "production",
      images: productionArea,
    },
    {
      id: "production-2",
      title: "Production Line",
      category: "production",
      images: production2,
    },
    {
      id: "production-3",
      title: "Production Workflow",
      category: "production",
      images: production3,
    },
    {
      id: "production-4",
      title: "Garment Production",
      category: "production",
      images: production4,
    },
    {
      id: "production-5",
      title: "Cutting Storage",
      category: "production",
      images: cuttingstorage,
    },
    {
      id: "production-6",
      title: "Checking Station",
      category: "production",
      images: checkingStation,
    },
    {
      id: "production-7",
      title: "Order Packaging",
      category: "production",
      images: OrderPackages,
    },

    // Products
    {
      id: "products-1",
      title: "Sample Cloth",
      category: "products",
      images: sampleCloth,
    },
    {
      id: "products-4",
      title: "Clothe Collection",
      category: "products",
      images: clotheCollection,
    },

    // Infrastructure
    {
      id: "infrastructure-1",
      title: "Director Cabin",
      category: "infrastructure",
      images: director,
    },
    
    {
      id: "infrastructure-3",
      title: "Steam Ironing Section",
      category: "infrastructure",
      images: IroningArea2,
    },
    {
      id: "infrastructure-4",
      title: "Inspection Room",
      category: "infrastructure",
      images: inspectionRoom,
    },
    {
      id: "infrastructure-5",
      title: "Packaging Area",
      category: "infrastructure",
      images: packagingArea,
    },
    {
      id: "infrastructure-6",
      title: "Carton Storage",
      category: "infrastructure",
      images: cartonStorage,
    },
    {
      id: "infrastructure-7",
      title: "Refolding Area",
      category: "infrastructure",
      images: reFoldingArea,
    },

    // Fabric
    {
      id: "fabric-1",
      title: "Fabric Checking Area",
      category: "fabric",
      images: fabricChecking,
    },
    {
      id: "fabric-2",
      title: "Fabric Quality Inspection",
      category: "fabric",
      images: fabricChecking2,
    },
    {
      id: "fabric-3",
      title: "Lay Table",
      category: "fabric",
      images: layTable,
    },
    {
      id: "fabric-4",
      title: "Fabric Spreading Table",
      category: "fabric",
      images: layTable2,
    },
    {
      id: "fabric-5",
      title: "Alteration Area",
      category: "fabric",
      images: alterationArea,
    },

    // Factory
    {
      id: "factory-1",
      title: "Button Area",
      category: "factory",
      images: ButtonArea,
    },
    {
      id: "factory-2",
      title: "Fusing Machine",
      category: "factory",
      images: fusingMachine,
    },
    {
      id: "factory-3",
      title: "Factory Production Unit",
      category: "factory",
      images: productionArea,
    },
    {
      id: "factory-4",
      title: "Packaging Unit",
      category: "factory",
      images: packagingArea,
    },
    {
      id: "factory-5",
      title: "Cutting Storage Unit",
      category: "factory",
      images: cuttingstorage,
    },
  ];
};

export async function getGallery(): Promise<GalleryItem[]> {
  try {
    const gallery = await directus.request(
      readItems("gallery", {
        fields: ["id", "title", "category", "images"],
      })
    );

    // Backend data
    const backendGallery = (gallery || []).map((item: any) => ({
      id: item.id,
      title: item.title,
      category: item.category,
      images: item.images,
    }));

    // Frontend hardcoded mapped data
    const frontendGallery = imageCollections();

    // Merge both
    return [...backendGallery, ...frontendGallery];

  } catch (error) {
    console.error("Gallery fetch error:", error);
    return [];
  }
}