import { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

interface AuthLayout {
  children: ReactNode;
}

const AuthLayout = ({ children }: AuthLayout) => {
  return (
    <>
      <nav className="fixed inset-0 w-full h-14 flex items-center justify-between border-b gap-2 sm:gap-4 px-4">
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
      </nav>
      <main className="min-h-screen p-4 pt-14 flex flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-1">
          <Image
            src={"/logo.svg"}
            alt="stairs logo"
            width={48}
            height={48}
            priority
          />
          <span className="text-2xl font-medium">Stairs</span>
        </div>
        <div className="w-full max-w-md">{children}</div>
      </main>
    </>
  );
};

export default AuthLayout;
