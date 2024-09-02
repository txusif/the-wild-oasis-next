import { Suspense } from "react";

import { getCabin, getCabins } from "@/app/_lib/data-service";

import Cabin from "@/app/_components/Cabin";
import Reservation from "@/app/_components/Reservation";
import Spinner from "@/app/_components/Spinner";

// export const metadata = {
//   title: "Cabins",
// };

export async function generateMetadata({ params }) {
  const cabin = await getCabin(params.cabinId);
  const { name } = cabin;
  return { title: `Cabin ${name}` };
}

export async function generateStaticParams() {
  const cabins = await getCabins();
  const ids = cabins.map((cabin) => ({ cabinId: String(cabin.id) }));
  return ids;
}

export default async function Page({ params }) {
  const { cabinId } = params;
  const cabin = await getCabin(cabinId);

  return (
    <div className="mx-auto mt-8 max-w-6xl">
      <Cabin cabin={cabin} />

      <div>
        <h2 className="mb-6 text-center text-3xl font-semibold text-accent-400  lg:mb-10 lg:text-5xl">
          Reserve {cabin.name} today.<br className="block md:hidden" /> Pay on arrival.
        </h2>

        <Suspense fallback={<Spinner />}>
          <Reservation cabin={cabin} />
        </Suspense>
      </div>
    </div>
  );
}