"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";
import Guest from "@/app/_components/Guest";

export default function Navigation() {
  const pathname = usePathname();
  return (
    <nav className="z-10 text-xl">
      <ul className="flex items-center gap-16">
        <li>
          <Link
            href="/cabins"
            className={`transition-colors hover:text-accent-400 ${
              pathname === "/cabins" ? "text-accent-400" : ""
            }`}
          >
            Cabins
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className={`transition-colors hover:text-accent-400 ${
              pathname === "/about" ? "text-accent-400" : ""
            }`}
          >
            About
          </Link>
        </li>
        <Guest />
      </ul>
    </nav>
  );
}
