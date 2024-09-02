"use client";

export default function Error({ error, reset }) {
  return (
    <main className="flex flex-col items-center justify-center gap-2 lg:gap-6">
      <h1 className="text-xl font-semibold lg:text-3xl">
        Something went wrong!
      </h1>
      <p className="text-sm md:text-base lg:text-xl">{error.message}</p>

      <button
        onClick={reset}
        className="inline-block rounded-sm bg-accent-500 px-4 py-3 text-base text-primary-800 lg:px-6 lg:text-lg"
      >
        Try again
      </button>
    </main>
  );
}
