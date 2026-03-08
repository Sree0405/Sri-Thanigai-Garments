import Navbar from "@/src/components/layouts/Navbar";
import Footer from "@/src/components/layouts/Footer";
import CTASection from "@/src/components/CTASection";
import BreadcrumbNav from "@/src/components/BreadcrumbNav";
import HeroSection from "@/src/components/layouts/HeroSection";
import { getCategoryBySlug } from "@/src/data/categories";
import { getSubcategoriesByCategory } from "@/src/data/subcategories";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Metadata } from "next";
import heroImage from "@/src/assets/hero-factory.jpg";

export default function CategoryPage({ params }) {
	const categorySlug = params.category;
	const category = getCategoryBySlug(categorySlug);
	if (!category) return null; // Optionally render a not-found page
	const subcategories = getSubcategoriesByCategory(category.id);
	return (
		<div className="min-h-screen flex flex-col">
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
						<motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
							<div>
								<h2 className="font-heading font-bold text-3xl text-foreground mb-2">
									{category.name} Collections
								</h2>
								<p className="text-muted-foreground">
									Explore our range of {category.name.toLowerCase()} garments designed with premium fabrics and high manufacturing standards.
								</p>
							</div>
							<span className="text-sm text-muted-foreground mt-4 md:mt-0">
								{subcategories.length} Collections
							</span>
						</motion.div>
						{/* ...rest of subcategory rendering... */}
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
}
