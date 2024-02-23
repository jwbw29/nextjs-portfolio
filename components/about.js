import Image from "next/image";

import portrait from "../public/portrait.jpg";

const AboutMe = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen gap-16 lg:gap-4 text-4xl py-24 ">
      {" "}
      <div className="flex flex-col lg:w-1/2 gap-12 justify-center">
        <div className="flex flex-col items-center lg:items-start"></div>
        <p className="text-xl text-justify lg:text-left lg:pr-8">
          {
            "I'm a former Product Owner who recently became a Full-Stack Engineer. I have years of experience in Product Strategy and Development, learning from users and how to build a user-friendly product. I wanted to do more of the building myself and decided to become a full-stack engineer. I enjoy learning new and better ways to do things and then applying those skills to see an idea come to reality."
          }
        </p>
      </div>
      <div className="flex flex-col gap-6 lg:w-1/2 items-center justify-center">
        <Image
          className=" rounded-3xl"
          src={portrait}
          height={400}
          width={400}
          alt="Picture of the project"
        />
      </div>
      <div className="lg:hidden flex justify-center mt-10">
        <div className="border-b-2 border-white w-2/3"></div>
      </div>
    </div>
  );
};

export default AboutMe;
