import Navbar from "@/src/components/layouts/Navbar";
import Footer from "@/src/components/layouts/Footer";
import HeroSection from "@/src/components/layouts/HeroSection";
import { motion } from "framer-motion";
import { Target, Eye, Award, Users } from "lucide-react";

import heroImage from "@/src/assets/hero-factory.jpg";
import factoryFloor from "@/src/assets/factory-floor.jpg";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">

      <Navbar />

      <main>

        {/* Hero Section */}
        <HeroSection
          tag="About Sri Thanigai Garments"
          title="Building Trust Through"
          highlight="Quality Manufacturing"
          description="Sri Thanigai Garments is a Chennai-based apparel manufacturer delivering premium quality garments for men, women and kids. We serve both domestic and international markets with reliable production and strict quality standards."
          backgroundImage={heroImage}
          primaryCTA={{
            text: "Explore Products",
            link: "/products"
          }}
          secondaryCTA={{
            text: "Contact Us",
            link: "/contact"
          }}
        />

        {/* Story Section */}
        <section className="section-padding bg-background">
          <div className="container-narrow">

            <div className="grid lg:grid-cols-2 gap-16 items-center mb-28">

              {/* Story Text */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-primary font-semibold uppercase text-sm tracking-widest">
                  Our Story
                </span>

                <h2 className="font-heading font-bold text-3xl md:text-4xl text-gradient-primary mt-4 mb-6">
                  A Reliable Partner for Global Apparel Manufacturing
                </h2>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  Founded with a vision to deliver world-class garments from
                  India, Sri Thanigai Garments has grown into a trusted
                  manufacturing partner for brands and retailers.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  With a monthly production capacity exceeding
                  <strong> 15,000 garments</strong> and a skilled workforce,
                  we combine traditional craftsmanship with modern production
                  technology to ensure consistent quality and timely delivery.
                </p>
              </motion.div>

              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <img
                  src={factoryFloor}
                  alt="Garment manufacturing facility"
                  className="rounded-2xl shadow-xl object-cover"
                />

                <div className="absolute -bottom-6 -left-6 bg-primary text-white px-6 py-4 rounded-xl shadow-lg">
                  <p className="text-2xl font-bold">15K+</p>
                  <p className="text-sm">Garments / Month</p>
                </div>
              </motion.div>

            </div>

            {/* Mission Vision Section */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

              {[
                {
                  icon: Target,
                  title: "Our Mission",
                  desc: "Deliver premium quality garments with reliability and consistent production standards."
                },
                {
                  icon: Eye,
                  title: "Our Vision",
                  desc: "Become a globally trusted garment manufacturing partner from India."
                },
                {
                  icon: Award,
                  title: "Quality First",
                  desc: "Every garment undergoes strict quality inspection ensuring zero-defect production."
                },
                {
                  icon: Users,
                  title: "Customer Focus",
                  desc: "Building long-term partnerships through transparency and trust."
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group p-8 rounded-2xl border border-border bg-card hover:shadow-xl transition-all"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary/10 mb-5">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>

                  <h3 className="font-heading font-semibold text-lg text-gradient-primary mb-3">
                    {item.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}

            </div>

          </div>
        </section>

      </main>

      <Footer />

    </div>
  );
};

export default About;