import Image from "next/image";
import Link from "next/link";

import logo from "@/public/logo.png";

function Logo() {
  return (
    <Link href="/" className="z-10 flex items-center gap-4">
      {/* <Image height="60" width="60" src="/logo.png" alt="The Wild Oasis logo" /> */}
      <Image
        quality={100}
        height="60"
        width="60"
        src={logo}
        alt="The Wild Oasis logo"
      />
      <span className="text-xl font-semibold text-primary-100">
        The Wild Oasis
      </span>
    </Link>
  );
}

export default Logo;
