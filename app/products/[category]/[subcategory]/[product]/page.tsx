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
import heroImage from "@/src/assets/hero-factory.jpg";

export default function ProductDetail({ params }) {
	const productSlug = params.product;
	const product = getProductBySlug(productSlug);
	if (!product) return null;
	const category = categories.find(c => c.id === product.categoryId);
	const subcategory = subcategories.find(s => s.id === product.subcategoryId);
	const productFabrics = getFabricsByIds(product.fabricIds);
	const related = getRelatedProducts(product);
	if (!category || !subcategory) return null;
	return (
		<div className="min-h-screen flex flex-col">
			<Navbar />
			<main>
				<HeroSection
					tag={`${subcategory.name} Collection`}
					title={product.name}
					description={product.description}
					backgroundImage={heroImage}
					primaryCTA={{ text: "Request Bulk Quote", link: "/contact" }}
					breadcrumbs={[
						{ label: "Products", href: "/products" },
						{ label: category.name, href: `/products/${category.slug}` },
						{ label: subcategory.name, href: `/products/${category.slug}/${subcategory.slug}` },
						{ label: product.name }
					]}
				/>
				{/* ...rest of product detail rendering... */}
			</main>
			<Footer />
		</div>
	);
}
