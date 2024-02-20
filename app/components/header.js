import Image from "next/image";
import Link from "next/link";

import { SecondaryButton, ContactButton } from "./Button";

import logo from "../../public/JB Logo.png";
// import resume from "../../public/Justin Byrd - Full Stack Web Developer Resume_1 copy.pdf";

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
            className="hover:shadow-lg hover:shadow-blue1 rounded-full"
          />
        </Link>
      </div>
      <div className="flex items-center gap-6">
        <Link href="/">
          <button className="h-14 w-32 text-2xl text-white bg-none focus:shadow-outline rounded-full hover:shadow-md hover:shadow-blue1">
            Home
          </button>
        </Link>

        <button className="h-14 w-32 text-2xl text-white bg-none focus:shadow-outline rounded-full hover:shadow-md hover:shadow-blue1">
          <a
            href="/Justin Byrd - Full Stack Web Developer Resume_1 copy.pdf"
            target="_blank"
          >
            Resume
          </a>
        </button>

        <Link href="/contact">
          <ContactButton>Get In Touch</ContactButton>
        </Link>
      </div>
    </header>
  );
};

export default Header;
