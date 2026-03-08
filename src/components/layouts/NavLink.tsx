import Link from "next/link";

export function NavLink({ href, children, ...props }) {
  return (
    <Link href={href} {...props}>
      {children}
    </Link>
  );
}
