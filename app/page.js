import Image from "next/image";
import Link from "next/link";

import bgImage from "@/public/bg.png";

export default function Page() {
  return (
    <main className="mt-28 lg:mt-24">
      <Image
        src={bgImage}
        fill
        quality={100}
        placeholder="blur"
        alt="Mountains and forests with two cabins"
        className="object-cover object-top"
      />

      <div className="relative z-10 text-center">
        <h1 className="mb-6 text-3xl font-normal tracking-tight text-primary-50 md:text-5xl lg:mb-10 lg:text-8xl">
          Welcome to paradise.
        </h1>
        <Link
          href="/cabins"
          className="rounded-sm bg-accent-500 px-6 py-4 text-base font-semibold text-primary-800 transition-all hover:bg-accent-600 md:text-lg lg:px-8 lg:py-6"
        >
          Explore luxury cabins
        </Link>
      </div>
    </main>
  );
}
