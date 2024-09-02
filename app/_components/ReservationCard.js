import Image from "next/image";
import { PencilSquareIcon } from "@heroicons/react/24/solid";
import { format, formatDistance, isPast, isToday, parseISO } from "date-fns";

import DeleteReservation from "./DeleteReservation";
import Link from "next/link";

export const formatDistanceFromNow = (dateStr) =>
  formatDistance(parseISO(dateStr), new Date(), {
    addSuffix: true,
  }).replace("about ", "");

function ReservationCard({ booking, onDelete }) {
  const {
    id,
    guestId,
    startDate,
    endDate,
    numNights,
    totalPrice,
    numGuests,
    status,
    created_at,
    cabins: { name, image },
  } = booking;

  return (
    <div className="flex flex-col border border-primary-800 lg:flex-row">
      <div className="relative aspect-square h-32">
        <Image
          src={image}
          alt={`Cabin ${name}`}
          fill
          className="border-r border-primary-800 object-cover"
        />
      </div>

      <div className="flex flex-grow flex-col px-4 py-3 lg:px-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold">
            {numNights} nights in Cabin {name}
          </h3>
          {isPast(new Date(startDate)) ? (
            <span className="flex h-7 items-center rounded-sm bg-yellow-800 px-3 text-xs font-bold uppercase text-yellow-200">
              past
            </span>
          ) : (
            <span className="flex h-7 items-center rounded-sm bg-green-800 px-3 text-xs font-bold uppercase text-green-200">
              upcoming
            </span>
          )}
        </div>

        <p className="text-base text-primary-300 lg:text-lg">
          {format(new Date(startDate), "EEE, MMM dd yyyy")} (
          {isToday(new Date(startDate))
            ? "Today"
            : formatDistanceFromNow(startDate)}
          ) &mdash; <br className="block lg:hidden" />{" "}
          {format(new Date(endDate), "EEE, MMM dd yyyy")}
        </p>

        <div className="mt-2 items-baseline gap-2 max-lg:grid max-lg:grid-cols-2 lg:mt-auto lg:flex lg:gap-5">
          <p className="text-xl font-semibold text-accent-400">${totalPrice}</p>
          <p className="text-lg text-primary-300">
            &bull; {numGuests} guest{numGuests > 1 && "s"}
          </p>
          <p className="text-sm text-primary-400 max-lg:col-span-2 lg:ml-auto">
            Booked {format(new Date(created_at), "EEE, MMM dd yyyy, p")}
          </p>
        </div>
      </div>

      <div className="flex border-primary-800 max-lg:gap-3 max-lg:divide-x-2 max-lg:divide-primary-800 max-lg:border-t lg:w-[100px] lg:flex-col lg:border-l">
        {!isPast(startDate) ? (
          <>
            <Link
              href={`/account/reservations/edit/${id}`}
              className="group flex flex-grow items-center gap-2 border-primary-800 px-3 text-xs font-bold uppercase text-primary-300 transition-colors hover:bg-accent-600 hover:text-primary-900 max-lg:justify-center max-lg:py-3 lg:border-b"
            >
              <PencilSquareIcon className="h-5 w-5 text-primary-600 transition-colors group-hover:text-primary-800" />
              <span className="mt-1">Edit</span>
            </Link>

            <DeleteReservation bookingId={id} onDelete={onDelete} />
          </>
        ) : null}
      </div>
    </div>
  );
}

export default ReservationCard;
