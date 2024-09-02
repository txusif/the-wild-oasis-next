import Link from "next/link";

function NotFound() {
  return (
    <main className="mt-4 space-y-3 text-center lg:space-y-6">
      <h1 className="text-xl font-semibold text-primary-200 lg:text-3xl">
        This page could not be found :(
      </h1>
      <Link
        href="/"
        className="inline-block rounded-sm bg-accent-500 px-4 py-3 text-base text-primary-800 lg:px-6 lg:text-lg"
      >
        Go back home
      </Link>
    </main>
  );
}

export default NotFound;
