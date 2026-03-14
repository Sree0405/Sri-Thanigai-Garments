"use client"

import Navbar from "@/src/components/layouts/Navbar";
import Footer from "@/src/components/layouts/Footer";
import HeroSection from "@/src/components/layouts/HeroSection";

import ContactForm from "@/src/components/contact/ContactForm";
import ContactInfo from "@/src/components/contact/ContactInfo";

import heroImage from "@/src/assets/hero-factory.jpg";
import BranchMap from "@/src/components/contact/BranchMap";

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

    </div>
  );
}