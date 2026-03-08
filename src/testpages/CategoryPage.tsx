import { useParams, Navigate } from "react-router-dom";
import Navbar from "@/src/components/layouts/Navbar";
import Footer from "@/src/components/layouts/Footer";
import CTASection from "@/src/components/CTASection";
import BreadcrumbNav from "@/src/components/BreadcrumbNav";
import HeroSection from "@/src/components/layouts/HeroSection";

import { getCategoryBySlug } from "@/src/data/categories";
import { getSubcategoriesByCategory } from "@/src/data/subcategories";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import heroImage from "@/src/assets/hero-factory.jpg";

const CategoryPage = () => {
  const { category: categorySlug } = useParams();
  const category = categorySlug ? getCategoryBySlug(categorySlug) : undefined;

  if (!category) return <Navigate to="/products" replace />;

  const subcategories = getSubcategoriesByCategory(category.id);

  return (
    <div className="min-h-screen flex flex-col">

      <Helmet>
        <title>{category.name} - Sri Thanigai Garments</title>
        <meta name="description" content={category.description} />
      </Helmet>

      <Navbar />

      <main>

<HeroSection
  tag="Product Category"
  title={category.name}
  description={category.description}

  backgroundImage={heroImage}

  breadcrumbs={[
    { label: "Products", href: "/products" },
    { label: category.name }
  ]}
/>


        {/* Subcategory Section */}
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
                  {category.name} Collections
                </h2>

                <p className="text-muted-foreground">
                  Explore our range of {category.name.toLowerCase()} garments
                  designed with premium fabrics and high manufacturing standards.
                </p>

              </div>

              <span className="text-sm text-muted-foreground mt-4 md:mt-0">
                {subcategories.length} Collections
              </span>

            </motion.div>

            {/* Subcategory Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

              {subcategories.map((sub, i) => (

                <motion.div
                  key={sub.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >

                  <Link
                    to={`/products/${category.slug}/${sub.slug}`}
                    className="group block bg-card rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-all duration-300"
                  >

                    <div className="aspect-[16/10] overflow-hidden bg-muted">
                      <img
                        src={sub.image}
                        alt={sub.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>

                    <div className="p-6">

                      <h3 className="font-heading font-bold text-xl text-foreground mb-2">
                        {sub.name}
                      </h3>

                      <p className="text-muted-foreground text-sm mb-4">
                        {sub.description}
                      </p>

                      <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
                        View Products
                        <ArrowRight className="w-4 h-4" />
                      </span>

                    </div>

                  </Link>

                </motion.div>

              ))}

            </div>

          </div>

        </section>

        <CTASection />

      </main>

      <Footer />

    </div>
  );
};

export default CategoryPage;