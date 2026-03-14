import Navbar from "@/src/components/layouts/Navbar";
import Footer from "@/src/components/layouts/Footer";
import CTASection from "@/src/components/CTASection";
import BreadcrumbNav from "@/src/components/BreadcrumbNav";
import CategoryCard from "@/src/components/product/CategoryCard";
import HeroSection from "@/src/components/layouts/HeroSection";

import { categories } from "@/src/data/categories";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

import heroImage from "@/src/assets/hero-factory.jpg";

const Products = () => {
  return (
    <div className="min-h-screen flex flex-col">

      <Helmet>
        <title>
          Products - Sri Thanigai Garments | Men, Women & Kids Wear Manufacturer
        </title>

        <meta
          name="description"
          content="Explore our complete range of garments for men, women and kids. Premium quality shirts, tops, dresses, nightwear and casual wear manufactured in Chennai, India."
        />

        <meta property="og:title" content="Products - Sri Thanigai Garments" />
        <meta
          property="og:description"
          content="Premium garment manufacturer offering men's, women's and kids' wear collections."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Sri Thanigai Garments Products",
            description: "Complete range of garments for men, women and kids.",
            url: "https://srithanigaigarments.com/products",
          })}
        </script>
      </Helmet>

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

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-2xl mx-auto mb-16"
            >
              <span className="text-primary font-semibold uppercase text-sm tracking-widest">
                Our Categories
              </span>

              <h2 className="font-heading font-bold text-3xl md:text-4xl text-gradient-primary mt-4 mb-4">
                Explore Our Garment Collections
              </h2>

              <p className="text-muted-foreground">
                Discover our wide range of apparel collections designed for
                comfort, durability and style across all age groups.
              </p>
            </motion.div>

            {/* Category Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

              {categories.map((category, i) => (
                <CategoryCard
                  key={category.id}
                  category={category}
                  index={i}
                />
              ))}

            </div>

          </div>
        </section>

        {/* CTA */}
        <CTASection />

      </main>

      <Footer />

    </div>
  );
};

export default Products;