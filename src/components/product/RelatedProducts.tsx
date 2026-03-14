import CollectionCard from "@/src/components/product/CollectionCard";

export default function RelatedProducts({ products }: any) {

  if (!products.length) return null;

  return (
    <section className="section-padding bg-background">

      <div className="container-narrow">

        <h2 className="font-heading font-bold text-2xl text-gradient-primary mb-10">
          Related Products
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {products.map((p: any, i: number) => (

            <CollectionCard
              key={p.id}
              title={p.name}
              description={p.shortDescription}
              image={p.coverImage}
              href={`/products/${p.category.slug}/${p.slug}`}
              index={i}
            />

          ))}

        </div>

      </div>

    </section>
  );
}