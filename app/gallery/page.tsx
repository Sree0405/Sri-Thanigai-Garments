import Navbar from "@/src/components/layouts/Navbar";
import Footer from "@/src/components/layouts/Footer";
import HeroSection from "@/src/components/layouts/HeroSection";
import heroFactory from "@/src/assets/hero-factory.jpg";

import GalleryGrid from "@/src/components/gallery/GalleryGrid";
import { GalleryItem, getGallery } from "@/src/data/gallery";

export default async function GalleryPage() {

const data = await getGallery()
const gallery: GalleryItem[] = data.map((item) => ({
  id: item.id,
  title: item.title,
  category: item.category,
  images: item.images
}));
  console.log(gallery)
  return (
    <div className="min-h-screen flex flex-col">

      <Navbar />

      <main>

        <HeroSection
          tag="Gallery"
          title="Inside Our"
          highlight="Manufacturing Facility"
          description="Explore our garment manufacturing facility."
          backgroundImage={heroFactory}
          breadcrumbs={[{ label: "Gallery" }]}
        />

        <GalleryGrid gallery={gallery} />

      </main>

      <Footer />

    </div>
  );
}