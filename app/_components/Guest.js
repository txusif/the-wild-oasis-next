"use client";

import Link from "next/link";
import { useAuth } from "@/app/_context/AuthContext";
import { usePathname } from "next/navigation";

function Guest() {
  const pathname = usePathname();
  const session = useAuth();

  return (
    <>
      {session?.user?.image ? (
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
      ) : (
        <Link
          href="/account"
          className="transition-colors hover:text-accent-400"
        >
          Guest area
        </Link>
      )}
    </>
  );
}

export default Guest;
