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

// export async function generateMetadata({ params }: Props) {

//   const { product } = await params;
//   const productData = await getProductBySlug(product);

//   if (!productData) return {};

//   const url = `https://sri-thanigai-garments.vercel.app/products/${productData.category.slug}/${productData.slug}`;

//   return {
//     title: `${productData.name} | Garment Manufacturer Chennai | Sri Thanigai Garments`,

//     description:
//       productData.description ||
//       `${productData.name} manufactured by Sri Thanigai Garments, a leading garment manufacturer in Chennai specializing in high-quality apparel production.`,

//     keywords: [
//       productData.name,
//       "garment manufacturer Chennai",
//       "bulk garment manufacturing",
//       "apparel manufacturing India",
//       "clothing manufacturer Chennai",
//       productData.category.name,
//     ],

//     alternates: {
//       canonical: url,
//     },

//     openGraph: {
//       title: productData.name,
//       description: productData.description,
//       url: url,
//       siteName: "Sri Thanigai Garments",
//       images: [
//         {
//           url: productData.images?.[0] || "/images/og-product.jpg",
//           width: 1200,
//           height: 630,
//           alt: productData.name,
//         },
//       ],
//       locale: "en_IN",
//       type: "product",
//     },

//     twitter: {
//       card: "summary_large_image",
//       title: productData.name,
//       description: productData.description,
//       images: [productData.images?.[0] || "/images/og-product.jpg"],
//     },
//   };
// }
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

        <section className="section-padding md:mt-0 mt-10 bg-background">

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

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": productData.name,
            "description": productData.description,
            "image": productData.images,
            "brand": {
              "@type": "Brand",
              "name": "Sri Thanigai Garments"
            },
            "manufacturer": {
              "@type": "Organization",
              "name": "Sri Thanigai Garments"
            },
            "category": productData.category.name
          })
        }}
      />
    </div>
  );
}