"use client"
import { motion } from "framer-motion";
import { Award, Clock, Globe, Users } from "lucide-react";

const reasons = [
  { icon: Award, title: "Premium Quality", desc: "100% quality inspection on every garment before shipping" },
  { icon: Clock, title: "On-Time Delivery", desc: "Reliable production schedules with consistent delivery timelines" },
  { icon: Globe, title: "Export Ready", desc: "Experience in manufacturing for international brands and markets" },
  { icon: Users, title: "Skilled Workforce", desc: "Trained and experienced garment manufacturing professionals" },
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-white relative overflow-hidden">

      {/* subtle background decoration */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_20%_20%,#000,transparent_50%)]"></div>

      <div className="container-narrow relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">
            Why Choose Us
          </span>

          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-gradient-primary mt-4">
            Your Trusted Manufacturing Partner
          </h2>

          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            We combine modern manufacturing technology, skilled professionals
            and strict quality standards to deliver garments that meet
            international expectations.
          </p>
        </motion.div>


        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {reasons.map((reason, i) => (

            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-border transition-all duration-300"
            >

              {/* glow hover effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-primary/10 to-transparent"></div>

              <div className="relative z-10 text-center">

                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl 
                bg-gradient-to-br from-primary/20 to-primary/5 mb-6
                group-hover:scale-110 transition-transform">

                  <reason.icon className="w-7 h-7 text-primary" />

                </div>

                {/* Title */}
                <h3 className="font-heading font-bold text-lg text-gradient-primary mb-3">
                  {reason.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {reason.desc}
                </p>

              </div>

            </motion.div>

          ))}

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;