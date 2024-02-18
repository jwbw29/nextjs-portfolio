import Image from "next/image";
import { ContactButton } from "./button"; // Adjust the import path as needed

const Header = () => {
  return (
    <header className="flex justify-between items-center p-6">
      <div className="flex items-center">
        {/* <Image src="/logo.svg" alt="Logo" width={40} height={40} /> */}
        <h1>image</h1>
      </div>
      <div className="flex items-center gap-6">
        <h3 className="text-2xl ml-4">Home</h3>
        <ContactButton>Get In Touch</ContactButton>
      </div>
    </header>
  );
};

export default Header;
