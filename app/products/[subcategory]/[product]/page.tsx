import Navbar from "@/src/components/layouts/Navbar";
import Footer from "@/src/components/layouts/Footer";
import CTASection from "@/src/components/CTASection";

import ProductGallery from "@/src/components/product/ProductGallery";
import ProductInfo from "@/src/components/product/ProductInfo";
import ProductFeatures from "@/src/components/product/ProductFeatures";
import RelatedProducts from "@/src/components/product/RelatedProducts";

import { getProductBySlug, getProductsByCategorySlug } from "@/src/data/products";
import BreadcrumbNav from "@/src/components/product/BreadcrumbNav";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    category: string;
    product: string;
  }>;
};

export async function generateMetadata({ params }: Props) {

  const { product } = await params;
  const productData = await getProductBySlug(product);

  if (!productData) return {};

  return {
    title: `${productData.name} | Sri Thanigai Garments`,
    description: productData.description,
    openGraph: {
      title: productData.name,
      description: productData.description
    }
  };
}

export default async function ProductDetail({ params }: Props) {

  const { category, product } = await params;

  const productData = await getProductBySlug(product);
console.log(productData)
  if (!productData) return notFound();

  const related = await getProductsByCategorySlug(category);

  const relatedProducts = related
    .filter((p: any) => p.slug !== product)
    .slice(0, 4);

  return (
    <div className="min-h-screen flex flex-col">

      <Navbar />

      <main>

<section className="section-padding bg-background">

  <div className="container-narrow">

    <BreadcrumbNav
      items={[
        { label: "Home", href: "/" },
        { label: "Products", href: "/products" },
        {
          label: productData.category.name,
          href: `/products/${productData.category.slug}`
        },
        { label: productData.name }
      ]}
    />

    <div className="grid lg:grid-cols-2 gap-16 items-start">

      <ProductGallery product={productData} />

      <ProductInfo product={productData} />

    </div>

  </div>

</section>

        <ProductFeatures product={productData} />

        <RelatedProducts products={relatedProducts} />

        <CTASection />

      </main>

      <Footer />

    </div>
  );
}