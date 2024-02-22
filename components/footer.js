import Image from "next/image";
import Link from "next/link";

import backToTop from "../public/back_to_top.png";

const Footer = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center gap-8">
      <Link href="/">
        <div className="flex flex-col items-center justify-center gap-2">
          <Image src={backToTop} width={35} height={35} alt="back_to_top" />
          <h3 className="text-xl">Back to Top</h3>
        </div>
      </Link>
      <footer className="flex flex-col w-full justify-center items-center gap-8">
        <p>© Justin Byrd 2024, All rights reserved</p>
      </footer>
    </div>
  );
};

export default Footer;
