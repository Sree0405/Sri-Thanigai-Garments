import CollectionCard from "@/src/components/product/CollectionCard";

export default function RelatedProducts({ products }: any) {

  if (!products.length) return null;

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-background border-t border-border/40">

      <div className="container-narrow">

        <h2 className="font-heading font-bold text-xl sm:text-2xl md:text-3xl text-gradient-primary mb-2 sm:mb-3">
          Related Products
        </h2>
        <p className="text-sm text-muted-foreground mb-8 sm:mb-10 max-w-lg">
          More from this collection
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">

          {products.map((p: any, i: number) => (

            <CollectionCard
              key={p.id}
              title={p.name}
              description={p.shortDescription}
              image={p.cover_image ?? undefined}
              href={`/products/${p.category.slug}/${p.slug}`}
              index={i}
            />

          ))}

        </div>

      </div>

    </section>
  );
}