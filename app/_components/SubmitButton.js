"use client";

import { useFormStatus } from "react-dom";

import SpinnerMini from "./SpinnerMini";

function SubmitButton({ pendingLabel, children }) {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      className="rounded-sm bg-accent-500 px-8 py-4 font-semibold text-primary-800 transition-all hover:bg-accent-600 disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300"
    >
      {pending ? pendingLabel : children}
    </button>
  );
}

export default SubmitButton;
