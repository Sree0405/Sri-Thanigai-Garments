import Link from "next/link";
import { ReactNode } from "react";

interface NavLinkProps extends React.ComponentProps<typeof Link> {
  children: ReactNode;
}

export function NavLink({ href, children, ...props }: NavLinkProps) {
  return (
    <Link href={href} {...props}>
      {children}
    </Link>
  );
}