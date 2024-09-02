import Link from "next/link";
import Image from "next/image";

import aboutImage1 from "@/public/about-1.jpg";
import aboutImage2 from "@/public/about-2.jpg";
import { getCabins } from "@/app/_lib/data-service";

export const revalidate = 86400;

export const metadata = {
  title: "About",
};

export default async function Page() {
  const cabins = await getCabins();
  const numCabins = cabins?.length;

  return (
    <div className="flex flex-col items-center gap-y-5 text-lg lg:grid lg:grid-cols-5 lg:gap-x-24 lg:gap-y-32">
      <div className="order-2 lg:order-none lg:col-span-3">
        <h1 className="mb-3 text-2xl font-medium text-accent-400 lg:mb-10 lg:text-4xl">
          Welcome to The Wild Oasis
        </h1>

        <div className="space-y-4 text-primary-200 lg:space-y-8">
          <p>
            Where nature&apos;s beauty and comfortable living blend seamlessly.
            Hidden away in the heart of the Italian Dolomites, this is your
            paradise away from home. But it&apos;s not just about the luxury
            cabins. It&apos;s about the experience of reconnecting with nature
            and enjoying simple pleasures with family.
          </p>
          <p>
            Our {numCabins} luxury cabins provide a cozy base, but the real
            freedom and peace you&apos;ll find in the surrounding mountains.
            Wander through lush forests, breathe in the fresh air, and watch the
            stars twinkle above from the warmth of a campfire or your hot tub.
          </p>
          <p>
            This is where memorable moments are made, surrounded by
            nature&apos;s splendor. It&apos;s a place to slow down, relax, and
            feel the joy of being together in a beautiful setting.
          </p>
        </div>
      </div>

      <div className="order-1 lg:order-none lg:col-span-2">
        <Image
          src={aboutImage1}
          alt="Family sitting around a fire pit in front of cabin"
          quality={100}
          placeholder="blur"
        />
      </div>

      <div className="order-3 aspect-square lg:relative lg:order-none lg:col-span-2">
        <Image
          src={aboutImage2}
          alt="Family that manages The Wild Oasis"
          quality={100}
          placeholder="blur" // only works with static images
        />
      </div>

      <div className="order-4 lg:order-none lg:col-span-3">
        <h1 className="mb-3 text-2xl font-medium text-accent-400 lg:mb-10 lg:text-4xl">
          Managed by our family since 1962
        </h1>

        <div className="space-y-4 text-primary-200 lg:space-y-8">
          <p>
            Since 1962, The Wild Oasis has been a cherished family-run retreat.
            Started by our grandparents, this haven has been nurtured with love
            and care, passing down through our family as a testament to our
            dedication to creating a warm, welcoming environment.
          </p>
          <p>
            Over the years, we&apos;ve maintained the essence of The Wild Oasis,
            blending the timeless beauty of the mountains with the personal
            touch only a family business can offer. Here, you&apos;re not just a
            guest; you&apos;re part of our extended family. So join us at The
            Wild Oasis soon, where tradition meets tranquility, and every visit
            is like coming home.
          </p>

          <div>
            <Link
              href="/cabins"
              className="mt-4 inline-block rounded-sm bg-accent-500 px-6 py-4 lg:px-8 lg:py-5 text-base font-semibold text-primary-800 transition-all hover:bg-accent-600 lg:text-lg"
            >
              Explore our luxury cabins
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
