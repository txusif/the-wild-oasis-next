"use client";

// import { useState } from "react";
import { useReservation } from "@/app/_context/ReservationContext";
import { differenceInDays, formatISO, isValid } from "date-fns";
import { createReservationAction } from "@/app/_lib/actions";
import SubmitButton from "./SubmitButton";

function ReservationForm({ breakfastPrice, cabin, user }) {
  // const [addBreakfast, setAddBreakfast] = useState(false);
  const { id: cabinId, maxCapacity, regularPrice, discount } = cabin;

  const { range, resetRange } = useReservation();

  const isValidStartDate = range?.from && isValid(new Date(range.from));
  const isValidEndDate = range?.to && isValid(new Date(range.to));

  const startDate = isValidStartDate
    ? formatISO(new Date(range.from), { representation: "date" })
    : null;

  const endDate = isValidEndDate
    ? formatISO(new Date(range.to), { representation: "date" })
    : null;

  const numNights =
    isValidStartDate && isValidEndDate
      ? differenceInDays(new Date(endDate), new Date(startDate))
      : 0;

  const cabinPrice = (regularPrice - discount) * numNights;

  const bookingData = {
    startDate,
    endDate,
    numNights,
    cabinPrice,
    cabinId,
    // breakfastPrice,
  };

  const createReservationWithData = createReservationAction.bind(
    null,
    bookingData,
  );

  return (
    <div className="scale-[1.01]">
      <div className="flex items-center justify-between bg-primary-800 px-4 py-2 text-primary-300 md:px-16">
        <p>Logged in as</p>

        <div className="flex items-center gap-4">
          <img
            // Important to display google profile images
            src={user.image}
            alt={user.name}
            className="h-8 rounded-full"
            referrerPolicy="no-referrer"
          />
          <p>{user.name}</p>
        </div>
      </div>

      <form
        // action={createReservationWithData}
        action={async (formData) => {
          await createReservationWithData(formData);
          resetRange();
        }}
        className="flex flex-col gap-5 bg-primary-900 px-16 py-10 text-lg"
      >
        <div className="space-y-2">
          <label htmlFor="numGuests">How many guests?</label>
          <select
            name="numGuests"
            id="numGuests"
            className="w-full rounded-sm bg-primary-200 px-5 py-3 text-primary-800 shadow-sm"
            required
          >
            <option value="" key="">
              Select number of guests...
            </option>
            {Array.from({ length: maxCapacity }, (_, i) => i + 1).map((x) => (
              <option value={x} key={x}>
                {x} {x === 1 ? "guest" : "guests"}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="observations">
            Anything we should know about your stay?
          </label>
          <textarea
            name="observations"
            id="observations"
            className="w-full rounded-sm bg-primary-200 px-5 py-3 text-primary-800 shadow-sm"
            placeholder="Any pets, allergies, special requirements, etc.?"
          />
        </div>

        {/* <div className="flex gap-2">
          <input
            type="checkbox"
            name="hasBreakfast"
            id="breakfast"
            checked={addBreakfast}
            onChange={() => setAddBreakfast((add) => !add)}
            className="h-6 w-6 rounded-sm text-primary-800 accent-accent-500 disabled:cursor-not-allowed disabled:accent-gray-500"
          />
          <label htmlFor="breakfast">Want to add breakfast for $25 </label>
        </div> */}

        <div className="flex items-center justify-end gap-6">
          {!(startDate && endDate) ? (
            <p className="text-base text-primary-300">
              Start by selecting dates
            </p>
          ) : (
            <SubmitButton pendingLabel="Reserving...">Reserve now</SubmitButton>
          )}
        </div>
      </form>
    </div>
  );
}

export default ReservationForm;
