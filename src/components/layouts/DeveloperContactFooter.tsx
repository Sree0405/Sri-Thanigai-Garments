import { ArrowUpRight } from "lucide-react";

const DeveloperContactFooter = () => {
  return (
    <section
      aria-label="Developer contact"
      className="mt-12 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 sm:px-5 sm:py-5"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0">
          <p className="text-[11px] uppercase tracking-[0.16em] text-white/45">
            Need a website or custom software?
          </p>
          <p className="mt-1 text-sm font-medium text-white/85">Sreekanth</p>
          <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-white/65">
            <a
              href="mailto:sreekanth04052005@gmail.com"
              className="hover:underline underline-offset-4"
            >
              sreekanth04052005@gmail.com
            </a>
            <a
              href="tel:+919363965927"
              className="hover:underline underline-offset-4"
            >
              9363965927
            </a>
            <a
              href="http://sreefolio.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="hover:underline underline-offset-4"
            >
              sreefolio.vercel.app
            </a>
          </div>
        </div>

        <a
          href="mailto:sreekanth04052005@gmail.com"
          className="inline-flex shrink-0 items-center gap-1.5 self-start rounded-lg border border-white/20 px-3 py-2 text-xs font-medium text-white/85 transition hover:bg-white/10 hover:text-white sm:self-center"
        >
          Contact Now
          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
        </a>
      </div>
    </section>
  );
};

export default DeveloperContactFooter;
