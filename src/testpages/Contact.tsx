import Navbar from "@/src/components/layouts/Navbar";
import Footer from "@/src/components/layouts/Footer";
import HeroSection from "@/src/components/layouts/HeroSection";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

import heroImage from "@/src/assets/hero-factory.jpg";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col">

      <Navbar />

      <main>

        {/* HERO */}
        <HeroSection
          tag="Contact Us"
          title="Let's Build"
          highlight="Your Garment Collection"
          description="Get in touch with our team to discuss manufacturing requirements, bulk production, or partnership opportunities."

          backgroundImage={heroImage}

          breadcrumbs={[
            { label: "Contact" }
          ]}
        />

        {/* CONTACT SECTION */}
        <section className="section-padding bg-background">

          <div className="container-narrow">

            <div className="grid lg:grid-cols-2 gap-16 items-start">

              {/* FORM */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >

                <div className="glass-card p-10 rounded-2xl border border-border">

                  <h2 className="font-heading font-bold text-2xl text-foreground mb-6">
                    Send Us a Message
                  </h2>

                  {submitted ? (
                    <div className="text-center py-12">

                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                        <Send className="w-8 h-8 text-primary" />
                      </div>

                      <h3 className="font-heading font-bold text-xl text-foreground mb-2">
                        Thank You!
                      </h3>

                      <p className="text-muted-foreground">
                        Your message has been received. Our team will contact you shortly.
                      </p>

                    </div>
                  ) : (

                    <form onSubmit={handleSubmit} className="space-y-6">

                      <div className="grid sm:grid-cols-2 gap-6">

                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Name *
                          </label>

                          <input
                            required
                            type="text"
                            placeholder="Your name"
                            className="w-full px-4 py-3 rounded-xl border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary/20"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Email *
                          </label>

                          <input
                            required
                            type="email"
                            placeholder="your@email.com"
                            className="w-full px-4 py-3 rounded-xl border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary/20"
                          />
                        </div>

                      </div>


                      <div className="grid sm:grid-cols-2 gap-6">

                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Phone
                          </label>

                          <input
                            type="tel"
                            placeholder="+91 xxxxx xxxxx"
                            className="w-full px-4 py-3 rounded-xl border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary/20"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Company
                          </label>

                          <input
                            type="text"
                            placeholder="Company name"
                            className="w-full px-4 py-3 rounded-xl border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary/20"
                          />
                        </div>

                      </div>


                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Message *
                        </label>

                        <textarea
                          required
                          rows={5}
                          placeholder="Tell us about your manufacturing requirements..."
                          className="w-full px-4 py-3 rounded-xl border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none"
                        />
                      </div>


                      <button
                        type="submit"
                        className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary/90 transition-all"
                      >
                        <Send className="w-4 h-4" />
                        Send Message
                      </button>

                    </form>

                  )}

                </div>

              </motion.div>


              {/* CONTACT INFO */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >

                <h2 className="font-heading font-bold text-2xl text-foreground">
                  Contact Information
                </h2>


                <div className="space-y-6">

                  <div className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border">

                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>

                    <div>
                      <p className="font-semibold text-foreground">Email</p>

                      <a
                        href="mailto:info@srithanigaigarments.com"
                        className="text-muted-foreground hover:text-primary"
                      >
                        info@srithanigaigarments.com
                      </a>

                    </div>

                  </div>


                  <div className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border">

                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>

                    <div>
                      <p className="font-semibold text-foreground">Phone</p>

                      <a
                        href="tel:+919876543210"
                        className="text-muted-foreground hover:text-primary"
                      >
                        +91 98765 43210
                      </a>

                    </div>

                  </div>


                  <div className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border">

                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>

                    <div>
                      <p className="font-semibold text-foreground">Address</p>

                      <p className="text-muted-foreground">
                        Chennai, Tamil Nadu, India
                      </p>

                    </div>

                  </div>

                </div>

              </motion.div>

            </div>

          </div>

        </section>


        {/* MAP */}
        <section className="bg-muted/40">

          <div className="container-narrow py-20">

            <div className="rounded-2xl overflow-hidden border border-border h-[400px]">

              <iframe
                title="Sri Thanigai Garments Location"
                src="https://www.google.com/maps?q=Chennai&t=&z=11&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
              />

            </div>

          </div>

        </section>

      </main>

      <Footer />

    </div>
  );
};

export default Contact;