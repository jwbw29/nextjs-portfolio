import Image from "next/image";

import portrait from "../../public/portrait.jpg";

import { PrimaryButton, SecondaryButton } from "./Button";

const AboutMe = () => {
  return (
    <div className="flex gap-4 text-4xl border border-dashed border-white">
      <div className="w-1/2">
        <h2>About Me</h2>
        <p className=" text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className="flex flex-col gap-6 items-center justify-center w-1/2">
        <Image
          src={portrait}
          width={500}
          height={500}
          alt="Picture of the author"
        />
        <div className="flex gap-4">
          <PrimaryButton>LIVE</PrimaryButton>
          <SecondaryButton>CODE</SecondaryButton>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
