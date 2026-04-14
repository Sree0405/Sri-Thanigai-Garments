import Navbar from "@/src/components/layouts/Navbar";
import Footer from "@/src/components/layouts/Footer";
import HeroSection from "@/src/components/layouts/HeroSection";
import heroFactory from "@/src/assets/hero-factory.jpg";
import TabSwitcher from "@/src/components/common/TabSwitcher";
import { tabsData } from "@/data/tabsData";


export default async function DesignGalleryPage() {
  const excludedIndexes = [0, 2, 4];

  return (
    <div className="min-h-screen flex flex-col">

      <Navbar />

      <main>

      <HeroSection
tag="Design Gallery"
title="Explore Our"
highlight="Design & Production Excellence"
description="Step inside our end-to-end garment manufacturing ecosystem, where creativity meets precision. From initial design concepts and pattern development to sampling, cutting, and final production, our facility showcases a seamless blend of craftsmanship, technology, and quality control. Discover how each stage contributes to delivering garments that meet global standards in fit, finish, and performance."
backgroundImage={heroFactory}
breadcrumbs={[
{ label: "Design Gallery" }
]}
/>


        <TabSwitcher tabs={tabsData} excludedIndexes={excludedIndexes} />

      </main>

      <Footer />

    </div>
  );
}