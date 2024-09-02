"use client";

import { useFormStatus } from "react-dom";

function SubmitButton({ pendingLabel, children }) {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      className="rounded-sm bg-accent-500 px-4 py-2 font-semibold text-primary-800 transition-all hover:bg-accent-600 disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300 lg:px-8 lg:py-4"
    >
      {pending ? pendingLabel : children}
    </button>
  );
}

export default SubmitButton;
