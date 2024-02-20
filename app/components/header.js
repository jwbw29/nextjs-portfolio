import Image from "next/image";
import Link from "next/link";

import { ContactButton } from "./Button";

import logo from "../../public/JB Logo.png";

const Header = () => {
  return (
    <header className="flex h-48 justify-between items-center py-6">
      <div className="flex items-center">
        <Link href="/">
          <Image
            src={logo}
            alt="Logo"
            width={160}
            height={160}
            priority={true}
          />
        </Link>
      </div>
      <div className="flex items-center gap-6">
        <Link href="/">
          <h3 className="text-2xl ml-4">Home</h3>
        </Link>

        <Link href="/contact">
          <ContactButton>Get In Touch</ContactButton>
        </Link>
      </div>
    </header>
  );
};

export default Header;
