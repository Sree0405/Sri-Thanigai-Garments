import Navbar from "@/src/components/layouts/Navbar";
import Footer from "@/src/components/layouts/Footer";
import CTASection from "@/src/components/CTASection";
import HeroSection from "@/src/components/layouts/HeroSection";
import ProductCard from "@/src/components/ProductCard";
import { getFabricBySlug } from "@/src/data/fabrics";
import { getProductsByFabricId } from "@/src/data/products";
import { motion } from "framer-motion";
import heroImage from "@/src/assets/hero-factory.jpg";

export default function FabricDetail({ params }) {
	const fabricSlug = params.fabric;
	const fabric = getFabricBySlug(fabricSlug);
	if (!fabric) return null;
	const productsUsingFabric = getProductsByFabricId(fabric.id);
	return (
		<div className="min-h-screen flex flex-col">
			<Navbar />
			<main>
				<HeroSection
					tag="Fabric Detail"
					title={fabric.name}
					highlight="Fabric"
					description={fabric.description}
					backgroundImage={heroImage}
					breadcrumbs={[
						{ label: "Fabrics", href: "/fabrics" },
						{ label: fabric.name }
					]}
					primaryCTA={{ text: "Contact for Fabric Options", link: "/contact" }}
				/>
				{/* ...rest of fabric detail rendering... */}
			</main>
			<Footer />
		</div>
	);
}
