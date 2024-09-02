"use client";

import Link from "next/link";
import { useAuth } from "@/app/_context/AuthContext";

function Guest({ pathname }) {
  const session = useAuth();

  return (
    <li>
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
                ? "max-md:border-b-2 max-md:border-accent-400 text-accent-400"
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
    </li>
  );
}

export default Guest;
