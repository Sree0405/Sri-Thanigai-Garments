import Navbar from "@/src/components/layouts/Navbar";
import Footer from "@/src/components/layouts/Footer";
import CTASection from "@/src/components/CTASection";
import HeroSection from "@/src/components/layouts/HeroSection";

import { getProductsByCategorySlug } from "@/src/data/products";

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

        <section className="section-padding bg-background">

          <div className="container-narrow">

            <div className="flex items-center justify-between mb-12">

              <h2 className="font-heading font-bold text-3xl text-foreground">
                Product Collection
              </h2>

              <span className="text-sm text-muted-foreground">
                {products.length} Products
              </span>

            </div>

            {/* Product Grid */}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

              {products.map((product: any) => (
				<CollectionCard
				key={product.id}
				title={product.name}
				description={product.short_description}
				image={product.cover_image}
				href={`/products/${product.category.slug}/${product.slug}`}
				ctaText="View Product"
				// index={i}
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