import Logo from "@/app/_components/Logo";
import Navigation from "@/app/_components/Navigation";
import MobileNav from "@/app/_components/MobileNav";

function Header() {
  return (
    <header className="border-b border-primary-900 px-8 py-5">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Logo />
        <div className="hidden md:flex">
          <Navigation />
        </div>

        <div className="md:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}

export default Header;
