"use client";

import Header from "../components/header";
import Footer from "../components/footer";
import Hero from "../components/hero";
import { ProjectBlack, ProjectBlue } from "../components/project";

import projectsData from "../public/projectsData.json";
import { TfiAngleUp } from "react-icons/tfi";

const handleClick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

export default function Home() {
  return (
    <main className="bg-dark text-white flex min-h-screen flex-col items-center p-6 pt-0">
      <div className=" max-w-7xl w-full items-left justify-between text-sm lg:flex flex-col ">
        <div className="min-h-screen flex flex-col">
          <Header />
          <Hero />
        </div>

        {/* <AboutMe /> */}

        {projectsData.map((project, i) =>
          i % 2 === 0 || i === 0 ? (
            <ProjectBlue key={i} project={project} />
          ) : (
            <ProjectBlack key={i} project={project} />
          )
        )}
      </div>

      <div className="flex flex-col w-full justify-center items-center gap-8 mt-12">
        <div
          onClick={handleClick}
          className="flex flex-col items-center justify-center gap-2 cursor-pointer"
        >
          <TfiAngleUp />
          <h3 className="text-xl">Back to Top</h3>
        </div>
        <Footer />
      </div>
    </main>
  );
}
