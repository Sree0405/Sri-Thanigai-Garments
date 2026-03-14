import { useParams, Navigate, Link } from "react-router-dom";

import Navbar from "@/src/components/layouts/Navbar";
import Footer from "@/src/components/layouts/Footer";
import CTASection from "@/src/components/CTASection";
import BreadcrumbNav from "@/src/components/BreadcrumbNav";
import HeroSection from "@/src/components/layouts/HeroSection";

import FabricBadge from "@/src/components/FabricBadge";
import ProductCard from "@/src/components/ProductCard";

import { getProductBySlug, getRelatedProducts } from "@/src/data/products";
import { categories } from "@/src/data/categories";
import { subcategories } from "@/src/data/subcategories";
import { getFabricsByIds } from "@/src/data/fabrics";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Helmet } from "react-helmet-async";

import heroImage from "@/src/assets/hero-factory.jpg";

const ProductDetail = () => {

  const { product: productSlug } = useParams();
  const product = productSlug ? getProductBySlug(productSlug) : undefined;

  if (!product) return <Navigate to="/products" replace />;

  const category = categories.find(c => c.id === product.categoryId);
  const subcategory = subcategories.find(s => s.id === product.subcategoryId);
  const productFabrics = getFabricsByIds(product.fabricIds);
  const related = getRelatedProducts(product);

  if (!category || !subcategory) return <Navigate to="/products" replace />;

  return (
    <div className="min-h-screen flex flex-col">

      <Helmet>
        <title>
          {product.name} - {category.name} | Sri Thanigai Garments
        </title>

        <meta name="description" content={product.description} />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: product.name,
            description: product.description,
            manufacturer: {
              "@type": "Organization",
              name: "Sri Thanigai Garments"
            }
          })}
        </script>
      </Helmet>

      <Navbar />

      <main>

        {/* Hero */}
        <HeroSection
          tag={`${subcategory.name} Collection`}
          title={product.name}
          description={product.description}
          backgroundImage={heroImage}
          primaryCTA={{
            text: "Request Bulk Quote",
            link: "/contact"
          }}
              breadcrumbs={[
                { label: "Products", href: "/products" },
                { label: category.name, href: `/products/${category.slug}` },
                { label: subcategory.name, href: `/products/${category.slug}/${subcategory.slug}` },
                { label: product.name }
              ]}          
        />


        {/* Product Section */}
        <section className="section-padding bg-background">

          <div className="container-narrow">

            <div className="grid lg:grid-cols-2 gap-14 items-start">

              {/* Product Image */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
              >

                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-muted shadow-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>

              </motion.div>


              {/* Product Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
              >

                <h1 className="font-heading font-bold text-3xl md:text-4xl text-gradient-primary mb-4">
                  {product.name}
                </h1>

                <p className="text-muted-foreground text-lg mb-8">
                  {product.description}
                </p>


                {/* Features */}
                <div className="mb-8">

                  <h3 className="font-heading font-semibold text-sm uppercase tracking-wider text-gradient-primary mb-4">
                    Product Features
                  </h3>

                  <ul className="space-y-3">

                    {product.features.map(f => (

                      <li
                        key={f}
                        className="flex items-start gap-3 text-sm text-muted-foreground"
                      >

                        <Check className="w-4 h-4 text-primary mt-1" />

                        {f}

                      </li>

                    ))}

                  </ul>

                </div>


                {/* Fabrics */}
                <div className="mb-10">

                  <h3 className="font-heading font-semibold text-sm uppercase tracking-wider text-gradient-primary mb-4">
                    Available Fabrics
                  </h3>

                  <div className="flex flex-wrap gap-2">

                    {productFabrics.map(f => (
                      <FabricBadge key={f.id} fabric={f} />
                    ))}

                  </div>

                </div>


                {/* CTA */}
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  Request Quote
                </Link>

              </motion.div>

            </div>

          </div>

        </section>


        {/* Related Products */}
        {related.length > 0 && (

          <section className="section-padding bg-muted/30">

            <div className="container-narrow">

              <h2 className="font-heading font-bold text-2xl text-gradient-primary mb-10">
                Related Products
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                {related.map((p, i) => (

                  <ProductCard
                    key={p.id}
                    product={p}
                    index={i}
                  />

                ))}

              </div>

            </div>

          </section>

        )}

        <CTASection />

      </main>

      <Footer />

    </div>
  );
};

export default ProductDetail;