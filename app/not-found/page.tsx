"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, Search, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden px-6">

      {/* Animated Background Shapes */}

      <motion.div
        className="absolute w-96 h-96 bg-primary/20 rounded-full blur-3xl"
        animate={{ x: [0, 50, -50, 0], y: [0, -40, 40, 0] }}
        transition={{ repeat: Infinity, duration: 10 }}
      />

      <motion.div
        className="absolute w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl right-0"
        animate={{ x: [0, -40, 40, 0], y: [0, 50, -50, 0] }}
        transition={{ repeat: Infinity, duration: 12 }}
      />

      {/* Content */}

      <div className="relative z-10 text-center max-w-xl">

        {/* 404 Title */}

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-7xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-primary to-indigo-600 bg-clip-text text-transparent"
        >
          404
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-2xl md:text-3xl font-semibold text-foreground mb-4"
        >
          Page Not Found
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground mb-10"
        >
          The page you're looking for might have been removed, renamed, or
          temporarily unavailable.
        </motion.p>

        {/* Buttons */}

        <div className="flex flex-wrap justify-center gap-4">

          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-primary to-indigo-600 hover:opacity-90 transition shadow-lg"
          >
            <Home className="w-4 h-4" />
            Go Home
          </Link>

          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border font-medium hover:bg-muted transition"
          >
            <Search className="w-4 h-4" />
            Browse Products
          </Link>

          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border font-medium hover:bg-muted transition"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </button>

        </div>

      </div>

    </div>
  );
}