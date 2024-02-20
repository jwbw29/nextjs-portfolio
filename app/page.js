import Link from "next/link";
import Image from "next/image";

import Header from "./components/Header";
import Footer from "./components/Footer";

import AboutMe from "./components/About";
import Project from "./components/Project";

import projectsData from "../public/projectsData.json";
import backToTop from "../public/back_to_top.png";

export default function Home() {
  return (
    <main className="bg-dark text-white flex min-h-screen flex-col items-center p-6 pt-0 border border-red-500 border-solid">
      <div className=" max-w-7xl w-full items-left justify-between text-sm lg:flex flex-col border-2 border-blue-500 border-solid">
        <div className="min-h-screen flex flex-col border border-dashed border-green-700">
          <Header />
          <div className="flex flex-col gap-10 border border-solid border-white items-center justify-center flex-1">
            <h1>justin_byrd</h1>
            <h3>Socials</h3>
          </div>
        </div>
        <AboutMe />
        {projectsData.map((project, i) => (
          <Project key={i} project={project} />
        ))}
      </div>
      <div className="flex flex-col w-full justify-center items-center gap-8">
        <Link href="/">
          <div className="flex flex-col items-center justify-center gap-2">
            <Image src={backToTop} width={35} height={35} alt="back_to_top" />
            <h3 className="text-xl">Back to Top</h3>
          </div>
        </Link>
        <Footer />
      </div>
    </main>
  );
}
