import Image from "next/image";
import Link from "next/link";

import bgImage from "@/public/bg.png";

export default function Page() {
  return (
    <main className="mt-24">
      <Image
        src={bgImage}
        fill
        quality={100}
        placeholder="blur"
        alt="Mountains and forests with two cabins"
        className="object-cover object-top"
      />

    <div className="relative z-10 text-center">
        <h1 className="text-primary-50 mb-10 text-8xl font-normal tracking-tight">
          Welcome to paradise.
        </h1>
        <Link
          href="/cabins"
          className="bg-accent-500 text-primary-800 hover:bg-accent-600 rounded-sm px-8 py-6 text-lg font-semibold transition-all"
        >
          Explore luxury cabins
        </Link>
      </div>
    </main>
  );
}
