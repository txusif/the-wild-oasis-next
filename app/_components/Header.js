import Logo from "@/app/_components/Logo";
import Navigation from "@/app/_components/Navigation";
import MobileNav from "@/app/_components/MobileNav";
import { auth } from "@/app/_lib/auth";

async function Header() {
  const session = await auth();
  return (
    <header className="border-b border-primary-900 px-8 py-5">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Logo />
        <div className="hidden md:flex">
          <Navigation />
        </div>

        <div className="md:hidden">
          <MobileNav session={session} />
        </div>
      </div>
    </header>
  );
}

export default Header;
