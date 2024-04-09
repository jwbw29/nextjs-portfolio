import Image from "next/image";
import Link from "next/link";

import portrait from "../public/portrait.png";

const Header = () => {
  return (
    <header className="flex justify-between items-center py-6">
      <div className="flex items-center">
        <Link href="/">
          <Image
            src={portrait}
            alt="Portrait"
            width={150}
            priority={true}
            className="hidden md:block hover:shadow-lg hover:shadow-blue1 rounded-full"
          />
        </Link>
      </div>
      <div className="flex items-center gap-5">
        <Link href="/">
          <button className="text-2xl lg:h-14 lg:w-32 text-white bg-none lg:hover:border lg:hover:border-solid lg:hover:border-white focus:text-blue1 hover:text-blue1 lg:focus:shadow-outline lg:focus:ring-1 lg:focus:ring-white lg:rounded-full lg:hover:shadow-md lg:hover:shadow-blue1">
            Home
          </button>
        </Link>

        <Link href="/Justin Byrd Web Developer Resume.pdf" target="_blank">
          <button className="text-2xl lg:h-14 lg:w-32 text-white bg-none lg:hover:border lg:hover:border-solid lg:hover:border-white focus:text-blue1 hover:text-blue1 lg:focus:shadow-outline lg:focus:ring-1 lg:focus:ring-white lg:rounded-full lg:hover:shadow-md lg:hover:shadow-blue1">
            Resume
          </button>
        </Link>

        <Link href="/contact">
          <button className="lg:h-14 lg:w-32 lg:border lg:border-solid lg:border-white lg:rounded-full text-2xl text-white bg-none focus:text-blue1 hover:text-blue1 lg:hover:shadow-md lg:hover:shadow-blue1">
            Contact
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
