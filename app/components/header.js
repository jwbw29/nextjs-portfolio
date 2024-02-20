import Image from "next/image";
import { ContactButton } from "./Button";

import logo from "../../public/JB Logo.png";

const Header = () => {
  return (
    <header className="flex h-48 justify-between items-center py-6">
      <div className="flex items-center">
        <Image src={logo} alt="Logo" width={160} height={160} />
      </div>
      <div className="flex items-center gap-6">
        <h3 className="text-2xl ml-4">Home</h3>
        <ContactButton>Get In Touch</ContactButton>
      </div>
    </header>
  );
};

export default Header;
