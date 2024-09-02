"use client";

import { XMarkIcon } from "@heroicons/react/24/solid";
import { format } from "date-fns";

import { useReservation } from "@/app/_context/ReservationContext";

function ReservationReminder() {
  // CHANGE
  const { range, resetRange } = useReservation();

  if (!range.from || !range.to) return null;

  return (
    <div className="fixed bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-4 rounded-xl bg-accent-500 px-3 py-3 text-base font-semibold text-primary-800 shadow-xl shadow-slate-900 max-lg:w-max lg:gap-8 lg:rounded-full lg:px-8 lg:py-5">
      <p>
        <span>👋</span> Don&apos;t forget to reserve your dates <br /> from{" "}
        {format(new Date(range.from), "MMM dd yyyy")} to{" "}
        {format(new Date(range.to), "MMM dd yyyy")}
      </p>
      <button
        onClick={resetRange}
        className="rounded-full p-1 transition-all hover:bg-accent-600"
      >
        <XMarkIcon className="h-5 w-5" />
      </button>
    </div>
  );
}

export default ReservationReminder;
