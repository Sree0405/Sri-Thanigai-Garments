import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Category } from "@/src/data/categories";
import { getSubcategoriesByCategory } from "@/src/data/subcategories";

interface CategoryCardProps {
  category: Category;
  index: number;
}

const CategoryCard = ({ category, index }: CategoryCardProps) => {
  const subcategories = getSubcategoriesByCategory(category.id);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <Link
        to={`/products/${category.slug}`}
        className="group block bg-card rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
      >
        <div className="aspect-[16/10] overflow-hidden bg-muted">
          <img
            src={category.image}
            alt={category.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </div>
        <div className="p-6">
          <h3 className="font-heading font-bold text-xl text-foreground mb-2">{category.name}</h3>
          <p className="text-muted-foreground text-sm mb-4">{category.shortDescription}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {subcategories.map((sub) => (
              <span key={sub.id} className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground">
                {sub.name}
              </span>
            ))}
          </div>
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
            Explore Collection <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
};

export default CategoryCard;
