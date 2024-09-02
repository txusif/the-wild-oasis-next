"use client";

import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import Image from "next/image";
import logo from "@/public/logo.png";
import Guest from "@/app/_components/Guest";
import { usePathname } from "next/navigation";

function MobileNav() {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex items-center justify-center">
        <CiMenuFries
          className="z-10 text-[32px] text-accent-400"
          strokeWidth={2}
        />
      </SheetTrigger>

      <SheetContent className="flex flex-col">
        {/* Logo */}
        <div className="mb-14 mt-28">
          <Link href="/" className="z-10 flex flex-col items-center gap-4">
            <Image
              quality={100}
              height="84"
              width="84"
              src={logo}
              alt="The Wild Oasis logo"
            />
            <span className="text-xl font-semibold text-primary-100">
              The Wild Oasis
            </span>
          </Link>
        </div>

        {/* Nav */}
        <nav className="">
          <ul className="flex flex-col items-center gap-8 text-xl">
            <li>
              <Link
                href="/cabins"
                className={`transition-colors hover:text-accent-400 ${
                  pathname === "/cabins" ? "border-b text-accent-400" : ""
                }`}
              >
                Cabins
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`transition-colors hover:text-accent-400 ${
                  pathname === "/about" ? "border-b text-accent-400" : ""
                }`}
              >
                About
              </Link>
            </li>
            <Guest />
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  );
}

export default MobileNav;
