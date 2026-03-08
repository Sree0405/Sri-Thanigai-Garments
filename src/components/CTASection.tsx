import Link from "next/link";

const CTASection = () => {
  return (
    <section className="py-24 px-4">

      <div className="max-w-6xl mx-auto">

        <div className="
        relative
        rounded-3xl
        bg-gradient-to-r from-primary to-indigo-600
        text-white
        px-10 py-14
        flex flex-col md:flex-row
        items-center
        justify-between
        gap-8
        shadow-[0_25px_80px_rgba(0,0,0,0.25)]
        ">

          <div className="max-w-lg">

            <h2 className="text-3xl md:text-4xl font-semibold mb-3">
              Let's build your next collection
            </h2>

            <p className="text-white/80 text-sm md:text-base">
              Partner with Sri Thanigai Garments for premium garment
              manufacturing and reliable export solutions.
            </p>

          </div>

          <Link
            href="/contact"
            className="
            px-7 py-3
            rounded-xl
            bg-white
            text-primary
            font-semibold
            hover:scale-105
            transition
            shadow-lg
          "
          >
            Start a Project
          </Link>

        </div>

      </div>

    </section>
  );
};

export default CTASection;