import Image from "next/image";

import portrait from "../../public/portrait.jpg";

import { PrimaryButton, SecondaryButton } from "./Button";

const AboutMe = () => {
  return (
    <div className="flex h-screen gap-4 text-4xl border border-dashed border-white py-24 ">
      {" "}
      <div className="flex flex-col w-1/2 gap-12 justify-center">
        <div className="flex flex-col items-start">
          <h2>About Me</h2>
        </div>
        <p className="text-xl text-left">
          I'm a former Product Owner who recently became a Full-Stack Engineer.
          I have years of experience in Product Strategy and Development,
          learning from users and how to build a user-friendly product. I wanted
          to do more of the building myself and decided to become a full-stack
          engineer. I enjoy learning new and better ways to do things and then
          applying those skills to see an idea come to reality. 
        </p>
      </div>
      <div className="flex flex-col gap-6 w-1/2 justify-center">
        <Image
          className=" rounded-3xl"
          src={portrait}
          height={300}
          width={300}
          alt="Picture of the project"
          //   layout="responsive"
        />
      </div>
    </div>
  );
};

export default AboutMe;
