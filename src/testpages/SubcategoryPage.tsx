import { useParams, Navigate } from "react-router-dom";
import Navbar from "@/src/components/layouts/Navbar";
import Footer from "@/src/components/layouts/Footer";
import CTASection from "@/src/components/CTASection";
import BreadcrumbNav from "@/src/components/BreadcrumbNav";
import ProductCard from "@/src/components/ProductCard";
import HeroSection from "@/src/components/layouts/HeroSection";

import { getCategoryBySlug } from "@/src/data/categories";
import { getSubcategoryBySlug } from "@/src/data/subcategories";
import { getProductsBySubcategory } from "@/src/data/products";

import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

import heroImage from "@/src/assets/hero-factory.jpg";

const SubcategoryPage = () => {
  const { category: categorySlug, subcategory: subcategorySlug } = useParams();

  const category = categorySlug
    ? getCategoryBySlug(categorySlug)
    : undefined;

  const subcategory =
    category && subcategorySlug
      ? getSubcategoryBySlug(category.id, subcategorySlug)
      : undefined;

  if (!category || !subcategory) return <Navigate to="/products" replace />;

  const products = getProductsBySubcategory(subcategory.id);

  return (
    <div className="min-h-screen flex flex-col">

      <Helmet>
        <title>
          {subcategory.name} - {category.name} | Sri Thanigai Garments
        </title>

        <meta name="description" content={subcategory.description} />
      </Helmet>

      <Navbar />

      <main>

        {/* Hero Section */}
        <HeroSection
          tag={`${category.name} Collection`}
          title={subcategory.name}
          description={subcategory.description}
          backgroundImage={heroImage}
          primaryCTA={{
            text: "Contact for Bulk Orders",
            link: "/contact",
          }}
          breadcrumbs={[
                { label: "Products", href: "/products" },
                { label: category.name, href: `/products/${category.slug}` },
                { label: subcategory.name },
              ]}
        />
        {/* Products Section */}
        <section className="section-padding bg-background">

          <div className="container-narrow">

            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row md:items-center md:justify-between mb-12"
            >
              <div>

                <h2 className="font-heading font-bold text-3xl text-foreground mb-2">
                  {subcategory.name} Collection
                </h2>

                <p className="text-muted-foreground">
                  Explore our premium range of {subcategory.name.toLowerCase()} manufactured with
                  high-quality fabrics and expert craftsmanship.
                </p>

              </div>

              <span className="text-sm text-muted-foreground mt-4 md:mt-0">
                {products.length} Products Available
              </span>

            </motion.div>

            {/* Product Grid */}
            {products.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                {products.map((product, i) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    index={i}
                  />
                ))}

              </div>
            ) : (
              <div className="text-center py-20">

                <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                  Products Coming Soon
                </h3>

                <p className="text-muted-foreground max-w-md mx-auto">
                  Our team is currently updating this collection. Contact us
                  directly to learn more about our available manufacturing
                  options.
                </p>

              </div>
            )}

          </div>

        </section>

        <CTASection />

      </main>

      <Footer />

    </div>
  );
};

export default SubcategoryPage;