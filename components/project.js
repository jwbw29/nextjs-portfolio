import Image from "next/image";
import Link from "next/link";
import { PrimaryButton, SecondaryButton } from "./button";

const ProjectBlack = ({ project }) => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen text-4xl gap-12 py-12 lg:py-24 ">
      {" "}
      <div className="flex flex-col lg:w-1/2 gap-16 lg:gap-12 justify-center">
        <div className="flex flex-col items-center lg:items-start">
          <h2>{project.name}</h2>
          <h4>{project.subtitle}</h4>
        </div>
        <p className="text-xl text-justify lg:text-left lg:pr-8">
          {project.description}
        </p>
      </div>
      <div className="flex flex-col gap-6 lg:gap-12 lg:w-1/2 items-center justify-center">
        <Image
          className=" rounded-3xl"
          src={project.image}
          width={500}
          height={500}
          alt="Picture of the project"
        />
        <div className="flex gap-4 lg:gap-8">
          <Link href={project.live} target="_blank">
            <PrimaryButton>LIVE</PrimaryButton>
          </Link>
          <Link href={project.github} target="_blank">
            <SecondaryButton>CODE</SecondaryButton>
          </Link>
        </div>
      </div>
    </div>
  );
};
const ProjectBlue = ({ project }) => {
  return (
    <div className="flex flex-col bg-blue2 -mx-6 p-6 lg:flex-row min-h-screen text-4xl gap-12 py-12 lg:py-24">
      {" "}
      <div className="flex flex-col lg:w-1/2 gap-16 lg:gap-12 justify-center">
        <div className="flex flex-col items-center lg:items-start">
          <h2>{project.name}</h2>
          <h4>{project.subtitle}</h4>
        </div>
        <p className="text-xl text-justify lg:text-left lg:pr-8">
          {project.description}
        </p>
      </div>
      <div className="flex flex-col gap-6 lg:gap-12 lg:w-1/2 items-center justify-center">
        <Image
          className=" rounded-3xl"
          src={project.image}
          width={400}
          height={400}
          alt="Picture of the project"
        />
        {project.live && project.github && (
          <div className="flex gap-4 lg:gap-8">
            <Link href={project.live} target="_blank">
              <PrimaryButton>LIVE</PrimaryButton>
            </Link>
            <Link href={project.github} target="_blank">
              <SecondaryButton>CODE</SecondaryButton>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export { ProjectBlack, ProjectBlue };
