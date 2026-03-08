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
    <section className="section-padding bg-dark-gradient">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-gold font-heading font-semibold text-sm uppercase tracking-widest">Why Choose Us</span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-card mt-3">
            Your Trusted Manufacturing Partner
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center p-8 rounded-2xl border border-card/10 hover:border-gold/30 transition-colors"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gold/10 mb-6">
                <reason.icon className="w-7 h-7 text-gold" />
              </div>
              <h3 className="font-heading font-bold text-lg text-card mb-3">{reason.title}</h3>
              <p className="text-card/60 text-sm leading-relaxed">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
