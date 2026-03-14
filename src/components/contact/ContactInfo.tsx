"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="space-y-8"
    >
      <h2 className="font-heading font-bold text-2xl text-gradient-primary">
        Contact Information
      </h2>

      <div className="space-y-6">

        {/* Email */}
        <div className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border hover:shadow-md transition">

          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
            <Mail className="w-5 h-5 text-primary" />
          </div>

          <div>
            <p className="font-semibold text-gradient-primary">Email</p>

            <a
              href="mailto:info@srithanigaigarments.com"
              className="text-muted-foreground hover:text-primary transition"
            >
              info@srithanigaigarments.com
            </a>
          </div>

        </div>

        {/* Phone */}
        <div className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border hover:shadow-md transition">

          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
            <Phone className="w-5 h-5 text-primary" />
          </div>

          <div>
            <p className="font-semibold text-gradient-primary">Phone</p>

            <a
              href="tel:+919876543210"
              className="text-muted-foreground hover:text-primary transition"
            >
              +91 98765 43210
            </a>
          </div>

        </div>

        {/* Address */}
        <div className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border hover:shadow-md transition">

          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
            <MapPin className="w-5 h-5 text-primary" />
          </div>

          <div>
            <p className="font-semibold text-gradient-primary">Address</p>

            <p className="text-muted-foreground">
              Chennai, Tamil Nadu, India
            </p>
          </div>

        </div>

      </div>
    </motion.div>
  );
}