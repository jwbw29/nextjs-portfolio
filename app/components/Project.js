import Image from "next/image";
import Link from "next/link";
import { PrimaryButton, SecondaryButton } from "./Button";

const Project = ({ project }) => {
  return (
    <div className="flex min-h-screen text-4xl gap-12 py-24 ">
      {" "}
      <div className="flex flex-col w-1/2 gap-12 justify-center">
        <div className="flex flex-col items-start">
          <h2>{project.name}</h2>
          <h4>{project.subtitle}</h4>
        </div>
        <p className="text-xl text-left pr-8">{project.description}</p>
      </div>
      <div className="flex flex-col gap-6 w-1/2 items-center justify-center">
        <Image
          className=" rounded-3xl"
          src={project.image}
          width={500}
          height={500}
          alt="Picture of the project"
        />
        <div className="flex gap-4">
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

export default Project;
