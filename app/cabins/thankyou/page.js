import Link from "next/link";

export default function Page() {
  return (
    <div className="mt-4 space-y-3 text-center lg:space-y-6">
      <h1 className="text-2xl font-semibold lg:text-3xl">
        Thank you for your reservation!
      </h1>
      <Link
        href="/account/reservations"
        className="inline-block text-lg lg:text-xl text-accent-500 underline"
      >
        Manage your reservations &rarr;
      </Link>
    </div>
  );
}
