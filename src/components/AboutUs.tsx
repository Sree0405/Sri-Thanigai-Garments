"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Users,
  Heart,
  TrendingUp,
  Scissors,
  Clock,
  Layers,
  Handshake,
  Sparkles,
  Target,
  CheckCircle,
  Building2,
  Globe,
  Award,
  Wallet,
  MapPin,
} from "lucide-react";

const aboutContent = {
  branches: {
    sectionLabel: "Our Branches",
    heading: "Three Locations. One Standard of Quality.",
    subheading:
      "Sri Thanigai Garments operates across three production and service locations in Chennai and Tamil Nadu — bringing consistent quality and accessible manufacturing support closer to our clients.",
    locations: [
      {
        number: "01",
        name: "Sri Thanigai Garments — Vanagaram",
        address:
          "11 & 12, 1st Floor, Fish Market Road, Vanagaram, Tamil Nadu 600077",
      },
      {
        number: "02",
        name: "Sri Thanigai Garments — Katupakkam",
        address:
          "2/219, Swaminathan Nagar Main Road, Katupakkam, Chennai 600056",
      },
      {
        number: "03",
        name: "Sri Thanigai Garments — Tiruverkadu",
        address:
          "1st & 2nd Floor, Old No. 114, New No. 146, 4th Street, Koladi Main Road, Devi Karumariamman Kovil, Tiruverkadu, Chennai 600077",
      },
    ],
  },

  story: {
    sectionLabel: "About Us",
    heading: "Growing Through Quality, Consistency & Trust",

    paragraphs: [
      "Established in 2020, Sri Thanigai Garments was founded with the vision of delivering high-quality garments backed by disciplined manufacturing standards and reliable production processes.",

      "From cutting and stitching to checking, ironing, and packing, every stage of our production is handled by experienced professionals who focus on quality, comfort, finishing excellence, and customer satisfaction.",

      "Over the years, we have built strong relationships with clients by maintaining consistency in production, transparent communication, export-quality standards, and on-time delivery for every order.",

      "Today, we manufacture garments for men, women, boys, girls, and babies — serving both domestic and international clients with scalable production capabilities and dependable quality control systems.",
    ],

    highlights: [
      {
        icon: Building2,
        label: "Established",
        value: "2020",
      },
      {
        icon: Globe,
        label: "Production Capacity",
        value: "20,000+ / Month",
      },
      {
        icon: Award,
        label: "Quality Focus",
        value: "100% Inspection",
      },
    ],
  },

  missionVision: {
    sectionLabel: "Mission & Vision",
    heading: "Driven by Quality and Long-Term Relationships",

    cards: [
      {
        icon: Target,
        title: "Our Mission",
        description:
          "To manufacture high-quality garments through disciplined production processes, skilled workmanship, and reliable delivery timelines while building lasting relationships with our clients through consistency and trust.",
      },
      {
        icon: Sparkles,
        title: "Our Vision",
        description:
          "To become one of the most trusted garment manufacturing companies in India by maintaining strong quality standards, empowering skilled workers, and continuously improving our infrastructure and production systems.",
      },
      {
        icon: Handshake,
        title: "Our Commitment",
        description:
          "Every order we handle receives dedicated attention — from fabric handling and stitching to quality checking and packaging — ensuring reliable output and customer satisfaction at every stage.",
      },
    ],
  },

  womenEmpowerment: {
    sectionLabel: "Women Empowerment",
    heading: "Creating Opportunities for Women in Manufacturing",

    quote:
      "A major part of our production strength comes from skilled women professionals who contribute across stitching, checking, finishing, and quality control divisions every day.",

    description:
      "We believe in creating a workplace where women feel safe, respected, financially independent, and professionally valued. Through stable employment opportunities, skill development, and supportive working conditions, we continue to empower women to grow confidently within the garment manufacturing industry.",

    pillars: [
      {
        icon: Heart,
        title: "Safe Working Environment",
        description:
          "We maintain a secure and respectful workplace culture where every employee is treated with dignity and professionalism.",
      },
      {
        icon: TrendingUp,
        title: "Skill Development",
        description:
          "Continuous learning and practical training help our workforce improve technical skills, efficiency, and career growth opportunities.",
      },
      {
        icon: Users,
        title: "Equal Opportunity",
        description:
          "We encourage women to take active roles across production, quality control, finishing, and operational responsibilities.",
      },
      {
        icon: Wallet,
        title: "Financial Independence",
        description:
          "Stable employment and fair wages help women build independent careers and support their families with confidence.",
      },
    ],
  },

  coreValues: {
    sectionLabel: "Core Values",
    heading: "The Principles Behind Every Garment We Produce",

    values: [
      { icon: Scissors, title: "Precision Manufacturing" },
      { icon: ShieldCheck, title: "Quality Assurance" },
      { icon: Clock, title: "Timely Delivery" },
      { icon: Users, title: "Women Empowerment" },
      { icon: Heart, title: "Ethical Workplace" },
      { icon: Layers, title: "Scalable Production" },
      { icon: CheckCircle, title: "Transparent Communication" },
      { icon: Handshake, title: "Client Trust" },
    ],
  },
};

// ─── unchanged helper ───────────────────────────────────────────────────────
function SectionLabel({ text }: { text: string }) {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 mb-5">
      <span className="w-2 h-2 rounded-full bg-primary" />
      <span className="text-xs font-semibold tracking-[0.18em] uppercase text-primary">
        {text}
      </span>
    </div>
  );
}

// ─── main component ──────────────────────────────────────────────────────────
export default function AboutUs() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">

      {/* background glow — unchanged */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gradient-to-r from-primary/10 to-indigo-600/10 blur-3xl rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* ========================= */}
        {/* BRANCHES — new section    */}
        {/* ========================= */}
        <div className="mb-32">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-14"
          >
            <SectionLabel text={aboutContent.branches.sectionLabel} />

            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 mb-5">
              {aboutContent.branches.heading}
            </h2>

            <p className="text-lg leading-relaxed text-neutral-600">
              {aboutContent.branches.subheading}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {aboutContent.branches.locations.map((branch, i) => (
              <motion.div
                key={branch.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative bg-white border border-neutral-200 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                {/* hover fill — matches site gradient language */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-indigo-600/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />

                {/* decorative branch number */}
                <span className="text-7xl font-black text-neutral-100 leading-none select-none absolute top-4 right-6 group-hover:text-primary/10 transition-colors duration-300">
                  {branch.number}
                </span>

                {/* icon */}
                <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-r from-primary to-indigo-600 flex items-center justify-center text-white shadow-lg mb-6">
                  <MapPin className="w-5 h-5" />
                </div>

                {/* name */}
                <h3 className="relative text-lg font-bold text-neutral-900 mb-3 leading-snug pr-10">
                  {branch.name}
                </h3>

                {/* accent divider */}
                <div className="relative w-10 h-[2px] bg-gradient-to-r from-primary to-indigo-600 rounded-full mb-4" />

                {/* address */}
                <p className="relative text-sm text-neutral-500 leading-relaxed">
                  {branch.address}
                </p>
              </motion.div>
            ))}
          </div>

        </div>

        {/* ========================= */}
        {/* ABOUT STORY — unchanged   */}
        {/* ========================= */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <SectionLabel text={aboutContent.story.sectionLabel} />

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 leading-tight">
              {aboutContent.story.heading}
            </h2>

            <div className="mt-8 space-y-6">
              {aboutContent.story.paragraphs.map((para, i) => (
                <p key={i} className="text-lg leading-relaxed text-neutral-600">
                  {para}
                </p>
              ))}
            </div>
          </motion.div>

          {/* highlight cards */}
          <div className="grid gap-5">
            {aboutContent.story.highlights.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white border border-neutral-200 rounded-3xl p-7 shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-primary to-indigo-600 flex items-center justify-center text-white shadow-lg">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-neutral-900">{item.value}</h3>
                      <p className="text-neutral-500 mt-1">{item.label}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

        {/* ========================= */}
        {/* MISSION VISION — unchanged */}
        {/* ========================= */}
        <div className="mb-32 text-center">

          <SectionLabel text={aboutContent.missionVision.sectionLabel} />

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 max-w-4xl mx-auto">
            {aboutContent.missionVision.heading}
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mt-16">
            {aboutContent.missionVision.cards.map((card, i) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white border border-neutral-200 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 text-left"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-primary to-indigo-600 flex items-center justify-center text-white shadow-lg mb-6">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-900 mb-4">{card.title}</h3>
                  <p className="text-neutral-600 leading-relaxed">{card.description}</p>
                </motion.div>
              );
            })}
          </div>

        </div>

        {/* ========================= */}
        {/* WOMEN EMPOWERMENT — unchanged */}
        {/* ========================= */}
        <div className="mb-32">

          <div className="text-center max-w-4xl mx-auto">
            <SectionLabel text={aboutContent.womenEmpowerment.sectionLabel} />

            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900">
              {aboutContent.womenEmpowerment.heading}
            </h2>

            <p className="mt-8 text-2xl leading-relaxed font-medium bg-gradient-to-r from-primary to-indigo-600 bg-clip-text text-transparent">
              "{aboutContent.womenEmpowerment.quote}"
            </p>

            <p className="mt-8 text-lg leading-relaxed text-neutral-600">
              {aboutContent.womenEmpowerment.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {aboutContent.womenEmpowerment.pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: i * 0.08 }}
                  viewport={{ once: true }}
                  className="bg-white border border-neutral-200 rounded-3xl p-7 shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-primary to-indigo-600 flex items-center justify-center text-white shadow-lg mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-3">{pillar.title}</h3>
                  <p className="text-neutral-600 leading-relaxed text-sm">{pillar.description}</p>
                </motion.div>
              );
            })}
          </div>

        </div>

        {/* ========================= */}
        {/* CORE VALUES — unchanged   */}
        {/* ========================= */}
        <div className="mb-32">

          <div className="text-center max-w-4xl mx-auto mb-20">
            <SectionLabel text={aboutContent.coreValues.sectionLabel} />
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900">
              {aboutContent.coreValues.heading}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {aboutContent.coreValues.values.map((value, i) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: i * 0.06 }}
                  viewport={{ once: true }}
                  className="bg-white border border-neutral-200 rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-2xl bg-gradient-to-r from-primary to-indigo-600 flex items-center justify-center text-white shadow-lg mb-5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900">{value.title}</h3>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}