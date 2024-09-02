import Link from "next/link";

function LoginMessage() {
  return (
    <div className="grid rounded-sm bg-primary-800">
      <p className="self-center py-8 text-center text-xl lg:py-12">
        Please{" "}
        <Link href="/login" className="text-accent-500 underline">
          login
        </Link>{" "}
        to reserve this
        <br /> cabin right now
      </p>
    </div>
  );
}

export default LoginMessage;
