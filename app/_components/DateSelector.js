"use client";

import {
  differenceInDays,
  isPast,
  isSameDay,
  isWithinInterval,
} from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { useReservation } from "@/app/_context/ReservationContext";

function isAlreadyBooked(range, datesArr) {
  return (
    range.from &&
    range.to &&
    datesArr.some((date) =>
      isWithinInterval(date, { start: range.from, end: range.to }),
    )
  );
}

function DateSelector({ settings, bookedDates, cabin }) {
  const { range, setRange, resetRange } = useReservation();

  const displayRange = isAlreadyBooked(range, bookedDates) ? {} : range;

  const { regularPrice, discount } = cabin;

  const { minBookingLength, maxBookingLength, breakfastPrice } = settings;

  const numNights =
    displayRange.to &&
    displayRange.from &&
    differenceInDays(displayRange.to, displayRange.from);

  const cabinPrice = (regularPrice - discount) * numNights;

  return (
    <div className="flex flex-col justify-between max-lg:w-full">
      <DayPicker
        className="place-self-center pt-12"
        mode="range"
        onSelect={setRange}
        selected={displayRange}
        min={minBookingLength + 1}
        max={maxBookingLength}
        fromMonth={new Date()}
        fromDate={new Date()}
        toYear={new Date().getFullYear() + 5}
        captionLayout="dropdown"
        numberOfMonths={2}
        disabled={(curDate) =>
          isPast(curDate) ||
          bookedDates.some((date) => isSameDay(date, curDate))
        }
      />

      <div className="mt-5 flex h-max items-center justify-between bg-accent-500 px-8 text-primary-800 lg:mt-0 lg:h-[72px]">
        <div className="gap-3 max-lg:grid max-lg:grid-cols-2 lg:flex lg:items-baseline lg:gap-6">
          <p className="col-span-2 flex items-baseline gap-2 max-lg:py-2">
            {discount > 0 ? (
              <>
                <span className="text-2xl">${regularPrice - discount}</span>
                <span className="font-semibold text-primary-700 line-through">
                  ${regularPrice}
                </span>
              </>
            ) : (
              <span className="text-2xl">${regularPrice}</span>
            )}
            <span className="">/night</span>
          </p>
          {numNights ? (
            <>
              <p className="rounded-sm bg-accent-600 px-3 py-2 text-2xl max-lg:h-max max-lg:w-max">
                <span>&times;</span> <span>{numNights}</span>
              </p>
              <p>
                <span className="text-base font-bold uppercase lg:text-lg">
                  Total
                </span>{" "}
                <span className="text-2xl font-semibold">${cabinPrice}</span>
              </p>
            </>
          ) : null}
        </div>

        {range.from || range.to ? (
          <button
            className="mb-1.5 mt-auto rounded-sm border border-primary-800 px-4 py-2 text-sm font-semibold lg:mb-0 lg:mt-0"
            onClick={resetRange}
          >
            Clear
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default DateSelector;
