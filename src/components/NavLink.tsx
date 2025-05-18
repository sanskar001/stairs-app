"use client";

import React, { FC } from "react";
import Link, { LinkProps } from "next/link";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

interface NavLinkProps extends LinkProps {
  children: React.ReactNode;
}

const NavLink: FC<NavLinkProps> = ({ children, ...props }) => {
  const pathname = usePathname();
  return (
    <Button
      variant="link"
      asChild
      className={cn(pathname === props.href ? "underline" : "")}
    >
      <Link {...props}>{children}</Link>
    </Button>
  );
};

export default NavLink;
