import Navbar from "@/src/components/layouts/Navbar";
import Footer from "@/src/components/layouts/Footer";
import HeroSection from "@/src/components/layouts/HeroSection";

import ContactForm from "@/src/components/contact/ContactForm";
import ContactInfo from "@/src/components/contact/ContactInfo";

import heroImage from "@/src/assets/hero-factory.jpg";
import BranchMap from "@/src/components/contact/BranchMap";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Contact Sri Thanigai Garments | Garment Manufacturer in Chennai | Get a Quote",

  description:
    "Contact Sri Thanigai Garments, a leading garment manufacturer in Chennai specializing in bulk apparel production for men, women and kids. Reach our team for garment manufacturing inquiries, quotes, and business partnerships.",

  keywords: [
    "Sri Thanigai Garments contact",
    "garment manufacturer Chennai contact",
    "apparel manufacturing company contact",
    "clothing manufacturer Chennai phone number",
    "bulk garment manufacturing inquiry",
    "textile manufacturer Chennai contact",
    "garment export company Chennai contact",
    "tshirt manufacturer Chennai contact",
    "garment factory Chennai contact",
    "custom clothing manufacturing Chennai"
  ],

  authors: [{ name: "Sri Thanigai Garments" }],
  creator: "Sri Thanigai Garments",
  publisher: "Sri Thanigai Garments",

  metadataBase: new URL("https://www.srithanigaigarments.com"),

  alternates: {
    canonical: "/contact",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Contact Sri Thanigai Garments | Apparel Manufacturing Company",
    description:
      "Get in touch with Sri Thanigai Garments for bulk garment manufacturing inquiries, quotes, and partnership opportunities.",
    url: "https://www.srithanigaigarments.com/contact",
    siteName: "Sri Thanigai Garments",
    images: [
      {
        url: "/images/og-contact.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Sri Thanigai Garments Manufacturing Company",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact Sri Thanigai Garments",
    description:
      "Contact Sri Thanigai Garments for garment manufacturing services and business inquiries.",
    images: ["/images/og-contact.jpg"],
  },
};
export default function Contact() {

  return (
    <div className="min-h-screen flex flex-col">

      <Navbar />

      <main>

        <HeroSection
          tag="Contact Us"
          title="Let's Build"
          highlight="Your Garment Collection"
          description="Get in touch with our team to discuss manufacturing requirements."
          backgroundImage={heroImage}
          breadcrumbs={[{ label: "Contact" }]}
        />

        <section className="section-padding bg-background">

          <div className="container-narrow">

            <div className="grid lg:grid-cols-2 gap-16 items-start">

              <ContactForm />

              <ContactInfo />

            </div>
             <BranchMap/>

          </div>

        </section>

      </main>

      <Footer />
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ContactPage",
      name: "Contact Sri Thanigai Garments",
      url: "https://www.srithanigaigarments.com/contact",
      mainEntity: {
        "@type": "Organization",
        name: "Sri Thanigai Garments",
        url: "https://www.srithanigaigarments.com",
        logo: "https://www.srithanigaigarments.com/logo.png",
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer support",
          areaServed: "Worldwide",
          availableLanguage: ["English"]
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Chennai",
          addressRegion: "Tamil Nadu",
          addressCountry: "India"
        }
      }
    }),
  }}
/>
    </div>
  );
}