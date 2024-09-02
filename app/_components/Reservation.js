import { getBookedDatesByCabinId, getSettings } from "@/app/_lib/data-service";

import DateSelector from "./DateSelector";
import ReservationForm from "./ReservationForm";
import { auth } from "../_lib/auth";
import LoginMessage from "./LoginMessage";

async function Reservation({ cabin }) {
  const [settings, bookedDates] = await Promise.all([
    getSettings(),
    getBookedDatesByCabinId(cabin.id),
  ]);

  const session = await auth();

  return (
    <div className="rounded-sm border border-primary-800 max-lg:flex max-lg:flex-col max-lg:justify-center lg:grid lg:min-h-[400px] lg:grid-cols-2">
      <DateSelector
        settings={settings}
        bookedDates={bookedDates}
        cabin={cabin}
      />
      {session?.user ? (
        <ReservationForm
          breakfastPrice={settings.breakfastPrice}
          cabin={cabin}
          user={session.user}
        />
      ) : (
        <LoginMessage />
      )}
    </div>
  );
}

export default Reservation;
