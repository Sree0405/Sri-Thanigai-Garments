import Navbar from "@/src/components/layouts/Navbar";
import Footer from "@/src/components/layouts/Footer";
import CTASection from "@/src/components/CTASection";
import HeroSection from "@/src/components/layouts/HeroSection";

import { getProductsByCategorySlug, type Product } from "@/src/data/products";

import heroImage from "@/src/assets/hero-factory.jpg";
import CollectionCard from "@/src/components/product/CollectionCard";

type Props = {
  params: Promise<{
    subcategory: string;
  }>;
};

export default async function SubcategoryPage({ params }: Props) {

  const { subcategory } = await params;

  const products = await getProductsByCategorySlug(subcategory);

  return (
    <div className="min-h-screen flex flex-col">

      <Navbar />

      <main>

        {/* Hero */}

        <HeroSection
          compact
          tag="Product Collection"
          title={subcategory.replace(/-/g, " ")}
          description="Explore our premium garment collection manufactured with advanced stitching and high-quality fabrics."
          backgroundImage={heroImage}
          primaryCTA={{
            text: "Contact for Bulk Orders",
            link: "/contact"
          }}
          breadcrumbs={[
            { label: "Products", href: "/products" },
            { label: subcategory }
          ]}
        />

        {/* Products */}

        <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-background border-t border-border/40">

          <div className="container-narrow">

            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between mb-8 sm:mb-10">

              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">
                  Browse collection
                </p>
                <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl bg-gradient-to-r from-primary to-indigo-600 bg-clip-text text-transparent">
                  Product Collection
                </h2>
              </div>

              <span className="text-sm text-muted-foreground tabular-nums shrink-0">
                {products.length} {products.length === 1 ? "product" : "products"}
              </span>

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8">

              {products.map((product: Product, index: number) => (
                <CollectionCard
                  key={product.id}
                  title={product.name}
                  description={product.shortDescription}
                  image={product.cover_image ?? undefined}
                  href={`/products/${product.category.slug}/${product.slug}`}
                  ctaText="View Product"
                  index={index}
                />
              ))}

            </div>

          </div>

        </section>

        <CTASection />

      </main>

      <Footer />

    </div>
  );
}