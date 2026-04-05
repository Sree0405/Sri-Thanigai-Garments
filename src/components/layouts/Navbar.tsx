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
    <header className="fixed top-3 left-0 right-0 z-50 px-3 sm:top-6 sm:px-4">
      <div className="relative mx-auto w-full max-w-6xl">
        {/* Floating bar — single row; mobile menu is NOT a flex sibling (prevents horizontal overflow) */}
        <div
          className={`
          flex min-w-0 items-center justify-between gap-2
          w-full max-w-full
          px-4 py-2.5 sm:px-6 sm:py-3
          rounded-full
          backdrop-blur-2xl
          border
          shadow-[0_20px_60px_rgba(0,0,0,0.15)]
          transition-all duration-500
          bg-white/50 border-white/30 text-black
        `}
        >

        {/* Logo */}
        <Link href="/" className="group flex min-w-0 shrink items-center gap-2 sm:gap-3">

          <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-primary to-indigo-500 flex items-center justify-center shadow-lg group-hover:scale-105 transition">
            <span className="text-white font-bold">S</span>
            <span className="absolute inset-0 rounded-full bg-primary/40 blur-md opacity-40 group-hover:opacity-70"></span>
          </div>

          <div className="min-w-0 leading-tight">
            <span className="block truncate font-bold">
              Sri Thanigai
            </span>
            <span className="block truncate text-[10px] tracking-[0.18em] uppercase opacity-70 sm:text-[11px] sm:tracking-[0.2em]">
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
                          const subs = getSubcategoriesByCategory(
                            cat.subcategoryGroupId
                          );

                          return (
                            <div key={cat.id} className="mb-2">

                              <Link
                                href={`/products/${cat.slug}`}
                                className="block px-3 py-2 rounded-lg text-sm font-semibold text-gray-800 hover:bg-primary/10 hover:text-primary transition"
                              >
                                {cat.name}
                              </Link>

                              {/* <div className="pl-4 space-y-0.5">

                                {subs.map((sub) => (
                                  <Link
                                    key={sub.id}
                                    href={`/products/${cat.slug}/${sub.slug}`}
                                    className="block px-3 py-1.5 text-xs rounded-md text-gray-500 hover:text-primary hover:bg-primary/5 transition"
                                  >
                                    {sub.name}
                                  </Link>
                                ))}

                              </div> */}

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
          type="button"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsOpen(!isOpen)}
          className="shrink-0 rounded-full p-1.5 text-foreground transition hover:bg-black/5 lg:hidden"
        >
          {isOpen ? <X size={22} strokeWidth={2} /> : <Menu size={22} strokeWidth={2} />}
        </button>

      </div>

      {/* Mobile menu: anchored below bar, full container width (no extra row width) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="
            absolute left-0 right-0 top-[calc(100%+0.625rem)] z-40
            max-h-[min(72vh,32rem)] overflow-y-auto overflow-x-hidden
            rounded-3xl border border-white/25 bg-white/95 p-5 shadow-xl backdrop-blur-xl
            sm:p-6
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
          className="flex items-center justify-between w-full text-left font-medium"
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
                    onClick={() => setIsOpen(false)}
                    className="block text-sm text-gray-600 hover:text-primary transition"
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
      <Link
        key={link.path}
        href={link.path}
        onClick={() => setIsOpen(false)}
        className="text-sm font-medium"
      >
        {link.label}
      </Link>
    )
  )}

  {/* CTA Button for Mobile */}
  <Link
    href="/contact"
    onClick={() => setIsOpen(false)}
    className="
      mt-4
      flex items-center justify-center gap-2
      px-5 py-3
      rounded-full
      bg-gradient-to-r from-primary to-indigo-500
      text-white
      text-sm font-semibold
      shadow-lg
      hover:scale-[1.02]
      transition
    "
  >
    <Phone size={18} />
    Request Quote
  </Link>

</div>

          </motion.div>
        )}
      </AnimatePresence>
      </div>
    </header>
  );
}