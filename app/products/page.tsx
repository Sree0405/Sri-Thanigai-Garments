// "use client";

import Navbar from "@/src/components/layouts/Navbar";
import Footer from "@/src/components/layouts/Footer";
import CTASection from "@/src/components/CTASection";
import HeroSection from "@/src/components/layouts/HeroSection";

import {  getCategories} from "@/src/data/categories";

import { motion } from "framer-motion";

import heroImage from "@/src/assets/hero-factory.jpg";
import CollectionCard from "@/src/components/product/CollectionCard";
import CollectionsIntro from "@/src/components/category/CollectionsIntro";
import CollectionsInfo from "@/src/components/category/CollectionsInfo";
export const metadata = {
  title:
    "Products - Sri Thanigai Garments | Men, Women & Kids Wear Manufacturer",
  description:
    "Explore our complete range of garments for men, women and kids. Premium quality shirts, tops, dresses, nightwear and casual wear manufactured in Chennai, India.",
  openGraph: {
    title: "Products - Sri Thanigai Garments",
    description:
      "Premium garment manufacturer offering men's, women's and kids' wear collections."
  }
};
export default async function Products() {
  const categories= await getCategories();
  return (
    <div className="min-h-screen flex flex-col">

      <Navbar />

      <main>

        {/* Hero Section */}
        <HeroSection
          tag="Our Product Range"
          title="Premium Garment"
          highlight="Collections"
          description="Explore our wide range of high-quality garments manufactured with premium fabrics, advanced stitching techniques and strict quality control."
          backgroundImage={heroImage}
          breadcrumbs={[
            { label: "Products" }
          ]}
          primaryCTA={{
            text: "Contact for Bulk Orders",
            link: "/contact"
          }}
        />

{/* Product Categories */}
<section className="section-padding bg-background">
  <div className="container-narrow">

    <CollectionsIntro />

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {categories.map((category, i) => (
        <CollectionCard
          key={category.id}
          title={category.name}
          description={category.shortDescription}
          image={category.image}
          href={`/products/${category.slug}`}
          ctaText="Explore Collection"
          index={i}
        />
      ))}
    </div>

  </div>
</section>

<CollectionsInfo />
        <CTASection />

      </main>

      <Footer />

    </div>
  );
}