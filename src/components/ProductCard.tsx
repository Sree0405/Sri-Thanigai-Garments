import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Product } from "@/src/data/products";
import { getFabricsByIds } from "@/src/data/fabrics";
import { getCategoryBySlug } from "@/src/data/categories";
import { categories } from "@/src/data/categories";
import { subcategories } from "@/src/data/subcategories";

interface ProductCardProps {
  product: Product;
  index: number;
}

const ProductCard = ({ product, index }: ProductCardProps) => {
  const productFabrics = getFabricsByIds(product.fabricIds);
  const category = categories.find((c) => c.id === product.categoryId);
  const subcategory = subcategories.find((s) => s.id === product.subcategoryId);

  if (!category || !subcategory) return null;

  const href = `/products/${category.slug}/${subcategory.slug}/${product.slug}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
    >
      <Link
        to={href}
        className="group block bg-card rounded-xl border border-border overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
      >
        <div className="aspect-[4/3] overflow-hidden bg-muted">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </div>
        <div className="p-5">
          <h3 className="font-heading font-bold text-lg text-gradient-primary mb-1">{product.name}</h3>
          <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{product.shortDescription}</p>
          <div className="flex flex-wrap gap-1.5 mb-3">
            {productFabrics.map((f) => (
              <span key={f.id} className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">
                {f.name}
              </span>
            ))}
          </div>
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
            View Details <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
