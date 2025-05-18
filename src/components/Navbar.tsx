import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { Button } from "./ui/button";
import NavLink from "./NavLink";

const Navbar: FC = () => {
  return (
    <nav className="fixed inset-0 w-full h-14 flex items-center justify-between gap-2 sm:gap-4 px-4">
      <Link href="/">
        <div className="flex items-center gap-1">
          <Image
            src={"/logo.svg"}
            alt="stairs logo"
            width={28}
            height={28}
            priority
          />
          <span className="text-lg font-medium hidden sm:block">Stairs</span>
        </div>
      </Link>

      <div className="flex items-center gap-1">
        <NavLink href="/pricing">Pricing</NavLink>
        <NavLink href="/about">About</NavLink>
        <NavLink href="/sign-in">Playground</NavLink>
      </div>

      <div className="hidden sm:block">
        <Button asChild>
          <Link href="/sign-in">Login</Link>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
