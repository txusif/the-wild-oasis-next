import Image from "next/image";
import TextExpander from "./TextExpander";
import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid";

function Cabin({ cabin }) {
  const { id, name, maxCapacity, regularPrice, discount, image, description } =
    cabin;

  return (
    <div className="mb-12 gap-20 border border-primary-800 px-3 py-3 lg:mb-24 lg:grid lg:grid-cols-[3fr_4fr] lg:px-10">
      <div className="relative scale-[1.15] max-lg:h-[300px] lg:-translate-x-3">
        <Image
          src={image}
          alt={`Cabin ${name}`}
          fill
          className="object-cover"
        />
      </div>

      <div>
        <h3 className="mb-0 rounded-sm bg-primary-950/50 pb-1 text-4xl font-black text-accent-100 max-lg:w-max max-lg:translate-y-[-35px] max-lg:px-2 max-lg:pt-2 lg:mb-5 lg:w-[150%] lg:translate-x-[-254px] lg:bg-primary-950 lg:p-6 lg:text-7xl">
          Cabin {name}
        </h3>

        <p className="mb-10 text-lg text-primary-300">
          <TextExpander>{description}</TextExpander>
        </p>

        <ul className="mb-7 flex flex-col gap-4">
          <li className="flex items-center gap-3">
            <UsersIcon className="h-5 w-5 text-primary-600" />
            <span className="text-lg">
              For up to <span className="font-bold">{maxCapacity}</span> guests
            </span>
          </li>
          <li className="flex gap-3 lg:items-center">
            <MapPinIcon className="h-5 w-5 text-primary-600" />
            <span className="text-lg">
              Located in the heart of the{" "}
              <span className="font-bold">Dolomites</span> (Italy)
            </span>
          </li>
          <li className="flex items-center gap-3">
            <EyeSlashIcon className="h-5 w-5 text-primary-600" />
            <span className="text-lg">
              Privacy <span className="font-bold">100%</span> guaranteed
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Cabin;
