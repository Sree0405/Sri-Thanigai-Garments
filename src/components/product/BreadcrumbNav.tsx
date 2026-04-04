import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface Props {
  items: BreadcrumbItem[];
}

export default function BreadcrumbNav({ items }: Props) {

  return (
    <nav
      aria-label="Breadcrumb"
      className="flex items-center text-xs sm:text-sm text-muted-foreground mb-5 sm:mb-6 -mx-1 px-1 overflow-x-auto overflow-y-hidden gap-y-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
    >
      {items.map((item, index) => {

        const isLast = index === items.length - 1;

        return (
          <span key={index} className="flex items-center whitespace-nowrap shrink-0">

            {item.href && !isLast ? (
              <Link
                href={item.href}
                className="hover:text-primary transition"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-foreground font-medium">
                {item.label}
              </span>
            )}

            {!isLast && (
              <ChevronRight className="w-4 h-4 mx-2 opacity-50" />
            )}

          </span>
        );

      })}

    </nav>
  );
}