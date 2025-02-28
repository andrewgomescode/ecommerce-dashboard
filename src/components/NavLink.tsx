"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface LinkProps {
  href: string;
  children?: React.ReactNode;
}

export type NavLinkProps = LinkProps;

export function NavLink(props: NavLinkProps) {
  const pathname = usePathname();

  return (
    <Link
      data-current={pathname === props.href}
      className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground data-[current=true]:text-foreground"
      {...props}
    />
  );
}
