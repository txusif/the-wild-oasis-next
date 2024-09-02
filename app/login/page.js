import SignInButton from "@/app/_components/SignInButton";

export const metadata = {
  title: "Login",
};

export default function Page() {
  return (
    <div className="mt-10 flex flex-col items-center gap-6 lg:gap-10">
      <h2 className="text-xl font-semibold text-primary-200 lg:text-3xl">
        Sign in to access your guest area
      </h2>
      <SignInButton />
    </div>
  );
}
