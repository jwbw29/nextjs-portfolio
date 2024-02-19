import Image from "next/image";
import Link from "next/link";
import { PrimaryButton, SecondaryButton } from "./Button";

const Project = ({ project }) => {
  return (
    <div className="flex gap-4 text-4xl border border-dashed border-white px-8 py-24 ">
      {" "}
      <div className="flex flex-col gap-6 items-center justify-center w-1/2">
        <Image
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
      <div className="flex flex-col w-1/2 gap-12">
        <div className="flex flex-col items-end">
          <h2>{project.name}</h2>
          <h4>{project.subtitle}</h4>
        </div>
        <p className="text-xl text-justify">{project.description}</p>
      </div>
    </div>
  );
};

export default Project;
