"use server";

import { redirect } from "next/navigation";

import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "./auth";
import {
  createBooking,
  deleteBooking,
  getBooking,
  getBookings,
  updateBooking,
  updateGuest,
} from "./data-service";
import { add } from "date-fns";

export async function signInAction() {
  await signIn("google", { redirectTo: "/account" });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}

export async function updateProfileAction(formData) {
  const session = await auth();

  if (!session)
    throw new Error(
      "Unauthorized: You need to be signed in to update your profile",
    );

  const nationalID = formData.get("nationalID");
  const [nationality, countryFlag] = formData.get("nationality").split("%");

  if (!/^[a-zA-Z0-9]{6,12}$/.test(nationalID))
    throw new Error("Please provide a valid national ID");

  const updateData = {
    nationalID,
    nationality,
    countryFlag,
  };

  const { error, data } = await updateGuest(session.user.guestID, updateData);

  if (error) throw new Error("Guest could not be updated");

  revalidatePath("/account/profile");
}

export async function deleteReservationAction(bookingID) {
  const session = await auth();

  if (!session)
    throw new Error(
      "Unauthorized: You need to be signed in to delete a reservation",
    );

  const guestBookings = await getBookings(session.user.guestID);

  const guestBookingIds = guestBookings.map((booking) => booking.id);

  if (!guestBookingIds.includes(bookingID))
    throw new Error("Unauthorized: You can only delete your own reservations");

  const { data, error } = await deleteBooking(bookingID);

  if (error) throw new Error("Booking could not be deleted");

  revalidatePath("/account/reservations");
}

export async function updateReservationAction(formData) {
  // 1. Authentication
  const session = await auth();

  if (!session)
    throw new Error(
      "Unauthorized: You need to be signed in to update a reservation",
    );

  // 2. Authorization
  const bookingID = Number(formData.get("bookingId"));

  const booking = await getBooking(bookingID);

  if (booking.guestId !== session.user.guestID)
    throw new Error("Unauthorized: You can only update your own reservations");

  // 3. Building the update data
  const numGuests = Number(formData.get("numGuests"));
  const observations = formData.get("observations").slice(0, 1000);

  const updateData = {
    numGuests,
    observations,
  };

  // 4. Mutation
  const { error, data } = await updateBooking(bookingID, updateData);

  // 5. Error handling
  if (error) throw new Error("Booking could not be updated");

  // 6. Revalidation
  revalidatePath("/account/reservations");
  revalidatePath(`/account/reservations/edit/${bookingID}`);

  // 7. Redirect
  redirect("/account/reservations");
}

export async function createReservationAction(bookingData, formData) {
  const session = await auth();

  if (!session)
    throw new Error(
      "Unauthorized: You need to be signed in to create a reservation",
    );

  const newBookingData = {
    ...bookingData,
    guestId: session.user.guestID,
    numGuests: Number(formData.get("numGuests")),
    observations: formData.get("observations").slice(0, 1000),
    extrasPrice: 0,
    totalPrice: bookingData.cabinPrice,
    hasBreakfast: false,
    isPaid: false,
    status: "unconfirmed",
  };

  const { error } = await createBooking(newBookingData);

  if (error) throw new Error("Booking could not be created");

  revalidatePath(`cabins/${bookingData.cabinId}`);
  redirect("/cabins/thankyou");
}
