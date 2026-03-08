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
import heroImage from "@/src/assets/hero-factory.jpg";

export default function SubcategoryPage({ params }) {
	const categorySlug = params.category;
	const subcategorySlug = params.subcategory;
	const category = getCategoryBySlug(categorySlug);
	const subcategory = category ? getSubcategoryBySlug(category.id, subcategorySlug) : undefined;
	if (!category || !subcategory) return null;
	const products = getProductsBySubcategory(subcategory.id);
	return (
		<div className="min-h-screen flex flex-col">
			<Navbar />
			<main>
				<HeroSection
					tag={`${category.name} Collection`}
					title={subcategory.name}
					description={subcategory.description}
					backgroundImage={heroImage}
					primaryCTA={{ text: "Contact for Bulk Orders", link: "/contact" }}
					breadcrumbs={[
						{ label: "Products", href: "/products" },
						{ label: category.name, href: `/products/${category.slug}` },
						{ label: subcategory.name },
					]}
				/>
				{/* Products Section */}
				<section className="section-padding bg-background">
					<div className="container-narrow">
						<motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
							<div>
								<h2 className="font-heading font-bold text-3xl text-foreground mb-2">
									{subcategory.name} Collection
								</h2>
								<p className="text-muted-foreground">
									Explore our {subcategory.name.toLowerCase()} garments.
								</p>
							</div>
							<span className="text-sm text-muted-foreground mt-4 md:mt-0">
								{products.length} Products
							</span>
						</motion.div>
						{/* ...rest of product rendering... */}
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
}
