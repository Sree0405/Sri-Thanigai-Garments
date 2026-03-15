"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { categories } from "@/src/data/categories";
import { getSubcategoriesByCategory } from "@/src/data/subcategories";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Products", path: "/products", hasDropdown: true },
  { label: "Manufacturing", path: "/manufacturing" },
  { label: "Infrastructure", path: "/infrastructure" },
  { label: "Gallery", path: "/gallery" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

const handleMouseEnter = () => {
  if (timeoutRef.current !== null) {
    clearTimeout(timeoutRef.current);
  }
  setDropdownOpen(true);
};

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setDropdownOpen(false), 150);
  };

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full px-4 flex justify-center">

      {/* Floating Glass Container */}
      <div
        className={`
        flex items-center justify-between
        w-full max-w-6xl
        px-6 py-3
        rounded-full
        backdrop-blur-2xl
        border
        shadow-[0_20px_60px_rgba(0,0,0,0.15)]
        transition-all duration-500
        bg-white/50 border-white/30 text-black
      `}
      >

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">

          <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-primary to-indigo-500 flex items-center justify-center shadow-lg group-hover:scale-105 transition">
            <span className="text-white font-bold">S</span>
            <span className="absolute inset-0 rounded-full bg-primary/40 blur-md opacity-40 group-hover:opacity-70"></span>
          </div>

          <div className="leading-tight">
            <span className="font-bold block">
              Sri Thanigai
            </span>
            <span className="text-[11px] tracking-[0.2em] uppercase opacity-70">
              Garments
            </span>
          </div>

        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">

          {navLinks.map((link) =>
            link.hasDropdown ? (
              <div
                key={link.path}
                className="relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href={link.path}
                  className="flex items-center gap-1 text-sm font-medium opacity-80 hover:opacity-100 transition"
                >
                  <span className="relative group">
                    {link.label}

                    <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
                  </span>

                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      dropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </Link>

                {/* Dropdown */}
                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.96 }}
                      transition={{ duration: 0.18 }}
                      className="
                      absolute top-full left-1/2 -translate-x-1/2 mt-4
                      w-[320px]
                      bg-white/90 backdrop-blur-xl
                      rounded-2xl
                      border border-white/20
                      shadow-[0_20px_60px_rgba(0,0,0,0.2)]
                      overflow-hidden
                    "
                    >

                      <div className="p-3">

                        {categories.map((cat) => {
                          const subs = getSubcategoriesByCategory(cat.id);

                          return (
                            <div key={cat.id} className="mb-2">

                              <Link
                                href={`/products/${cat.slug}`}
                                className="block px-3 py-2 rounded-lg text-sm font-semibold text-gray-800 hover:bg-primary/10 hover:text-primary transition"
                              >
                                {cat.name}
                              </Link>

                              <div className="pl-4 space-y-0.5">

                                {subs.map((sub) => (
                                  <Link
                                    key={sub.id}
                                    href={`/products/${cat.slug}/${sub.slug}`}
                                    className="block px-3 py-1.5 text-xs rounded-md text-gray-500 hover:text-primary hover:bg-primary/5 transition"
                                  >
                                    {sub.name}
                                  </Link>
                                ))}

                              </div>

                            </div>
                          );
                        })}

                      </div>

                      <div className="border-t border-gray-200 p-3">
                        <Link
                          href="/products"
                          className="block text-sm font-medium text-gray-600 hover:text-primary"
                        >
                          View all Collection →
                        </Link>
                      </div>

                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            ) : (
              <Link
                key={link.path}
                href={link.path}
                className="relative text-sm font-medium opacity-80 hover:opacity-100 transition"
              >
                <span className="relative group">
                  {link.label}

                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </span>
              </Link>
            )
          )}

          {/* CTA */}
          <Link
            href="/contact"
            className="
            flex items-center gap-2
            px-5 py-2
            rounded-full
            bg-gradient-to-r from-primary to-indigo-500
            text-white
            text-sm font-semibold
            shadow-lg hover:scale-105
            transition
          "
          >
            <Phone size={16} />
            Get Quote
          </Link>

        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 10 }}
            exit={{ opacity: 0, y: -10 }}
            className="
            absolute top-20
            w-[90%]
            backdrop-blur-xl
            bg-white/90
            border border-white/20
            rounded-3xl
            p-6
            shadow-xl
            lg:hidden
          "
          >

            <div className="flex flex-col gap-4">

              {navLinks.map((link) =>
                link.hasDropdown ? (
                  <div key={link.path}>

                    <button
                      onClick={() =>
                        setMobileProductsOpen(!mobileProductsOpen)
                      }
                      className="flex items-center justify-between w-full"
                    >
                      {link.label}
                      <ChevronDown
                        className={`transition ${
                          mobileProductsOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {mobileProductsOpen && (
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: "auto" }}
                          exit={{ height: 0 }}
                          className="overflow-hidden"
                        >

                          <div className="pl-4 mt-2 space-y-1">

                            {categories.map((cat) => (
                              <Link
                                key={cat.id}
                                href={`/products/${cat.slug}`}
                                className="block text-sm text-gray-600"
                              >
                                {cat.name}
                              </Link>
                            ))}

                          </div>

                        </motion.div>
                      )}
                    </AnimatePresence>

                  </div>
                ) : (
                  <Link key={link.path} href={link.path}>
                    {link.label}
                  </Link>
                )
              )}

            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}