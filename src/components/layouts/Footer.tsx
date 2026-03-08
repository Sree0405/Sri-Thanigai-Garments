import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";
import { categories } from "@/src/data/categories";

const Footer = () => {
  return (
    <footer className="relative bg-slate-950 text-slate-200 overflow-hidden">

      {/* decorative gradient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-r from-primary/20 to-indigo-600/20 blur-3xl opacity-40 pointer-events-none"></div>

      {/* top gradient divider */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-primary to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-24">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16">

          {/* Brand */}
          <div className="lg:col-span-2">

            <div className="flex items-center gap-3 mb-8">

              <div className="w-12 h-12 rounded-xl gradient-custom flex items-center justify-center text-white font-bold shadow-lg">
                S
              </div>

              <div>
                <span className="text-2xl font-semibold block">
                  Sri Thanigai
                </span>
                <span className="text-xs uppercase tracking-widest text-slate-500">
                  Garments
                </span>
              </div>

            </div>

            <p className="text-slate-400 text-sm leading-relaxed max-w-md mb-8">
              Sri Thanigai Garments is a premium garment manufacturer based
              in Chennai specializing in outerwear and nightwear for men,
              women and kids with high-quality production standards.
            </p>

            {/* Social */}
            <div className="flex gap-4">

              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="
                    w-11 h-11
                    rounded-xl
                    bg-slate-800
                    flex items-center justify-center
                    hover:gradient-custom
                    hover:text-white
                    transition-all
                    duration-300
                    hover:-translate-y-1
                  "
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}

            </div>

          </div>

          {/* Company */}
          <div>

            <h4 className="text-sm uppercase tracking-wider text-slate-400 mb-6 font-semibold">
              Company
            </h4>

            <div className="flex flex-col gap-4">

              {[
                { label: "About", path: "/about" },
                { label: "Manufacturing", path: "/manufacturing" },
                { label: "Infrastructure", path: "/infrastructure" },
                { label: "Gallery", path: "/gallery" },
              ].map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className="text-sm text-slate-400 hover:text-white transition"
                >
                  {link.label}
                </Link>
              ))}

            </div>

          </div>

          {/* Products */}
          <div>

            <h4 className="text-sm uppercase tracking-wider text-slate-400 mb-6 font-semibold">
              Products
            </h4>

            <div className="flex flex-col gap-4">

              {categories.slice(0,4).map((cat) => (
                <Link
                  key={cat.id}
                  href={`/products/${cat.slug}`}
                  className="text-sm text-slate-400 hover:text-white transition"
                >
                  {cat.name}
                </Link>
              ))}

              <Link
                href="/products"
                className="text-sm text-slate-400 hover:text-white transition"
              >
                All Products
              </Link>

            </div>

          </div>

          {/* Contact */}
          <div>

            <h4 className="text-sm uppercase tracking-wider text-slate-400 mb-6 font-semibold">
              Contact
            </h4>

            <div className="flex flex-col gap-5 text-sm text-slate-400">

              <a
                href="mailto:thanigaigarments@gmail.com"
                className="flex items-center gap-3 hover:text-white transition"
              >
                <Mail className="w-4 h-4 text-primary" />
                thanigaigarments@gmail.com
              </a>

              <a
                href="tel:+919840966586"
                className="flex items-center gap-3 hover:text-white transition"
              >
                <Phone className="w-4 h-4 text-primary" />
                +91 98409 66586
              </a>

              <div className="flex items-start gap-3">

                <MapPin className="w-4 h-4 mt-1 shrink-0 text-primary" />

                <span>
                  No 11 & 12, Fish Market Road,
                  Chettiyar Agaram Main Road,
                  Vanagaram, Chennai - 600095.
                </span>

              </div>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="border-t border-slate-800 mt-20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">

          <p>
            © {new Date().getFullYear()} Sri Thanigai Garments
          </p>

          <p>
            Premium Garment Manufacturer · Chennai, India
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;