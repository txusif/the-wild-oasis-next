"use client";

import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import Image from "next/image";
import logo from "@/public/logo.png";
import Guest from "@/app/_components/Guest";
import { usePathname } from "next/navigation";
import SignOutButton from "@/app/_components/SignOutButton";
import { useAuth } from "@/app/_context/AuthContext";

function MobileNav() {
  const pathname = usePathname();
  const session = useAuth();

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
          <SheetClose asChild>
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
          </SheetClose>
        </div>

        {/* Nav */}
        <nav className="">
          <ul className="flex flex-col items-center gap-8 text-xl">
            <li>
              <SheetClose asChild>
                <Link
                  href="/cabins"
                  className={`transition-colors hover:text-accent-400 ${
                    pathname === "/cabins"
                      ? "border-b-2 border-accent-400 text-accent-400"
                      : ""
                  }`}
                >
                  Cabins
                </Link>
              </SheetClose>
            </li>
            <li>
              <SheetClose asChild>
                <Link
                  href="/about"
                  className={`transition-colors hover:text-accent-400 ${
                    pathname === "/about"
                      ? "border-b-2 border-accent-400 text-accent-400"
                      : ""
                  }`}
                >
                  About
                </Link>
              </SheetClose>
            </li>

            {/* <Guest /> */}
            <li>
              {session?.user?.image ? (
                <SheetClose asChild>
                  <Link
                    href="/account"
                    className="flex items-center gap-4 transition-colors hover:text-accent-400"
                  >
                    <img
                      src={session.user.image}
                      alt={session.user.name}
                      className="h-8 rounded-full"
                      referrerPolicy="no-referrer"
                    />
                    <span
                      className={`${
                        pathname === "/account"
                          ? "text-accent-400 max-md:border-b-2 max-md:border-accent-400"
                          : ""
                      }`}
                    >
                      Guest area
                    </span>
                  </Link>
                </SheetClose>
              ) : (
                <SheetClose asChild>
                  <Link
                    href="/account"
                    className="transition-colors hover:text-accent-400"
                  >
                    Guest area
                  </Link>
                </SheetClose>
              )}
            </li>

            {session?.user ? (
              <li>
                <SignOutButton />
              </li>
            ) : null}
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  );
}

export default MobileNav;
