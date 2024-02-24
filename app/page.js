import Image from "next/image";
import Link from "next/link";

import Header from "../components/header";
import Footer from "../components/footer";
import Hero from "../components/hero";
import AboutMe from "../components/about";
import Project from "../components/project";

import projectsData from "../public/projectsData.json";
import backToTop from "../public/back_to_top.png";

export default function Home() {
  return (
    <main className="bg-dark text-white flex min-h-screen flex-col items-center p-6 pt-0">
      <div className=" max-w-7xl w-full items-left justify-between text-sm lg:flex flex-col ">
        <div className="min-h-screen flex flex-col">
          <Header />
          <Hero />
        </div>
        <div className="lg:hidden flex justify-center mt-8">
          <div className="border-t-2 border-white w-2/3"></div>
        </div>

        {/* TODO */}
        <AboutMe />
        {/* TODO */}
        {projectsData.map((project, i) => (
          <Project key={i} project={project} />
        ))}
      </div>
      {/* TODO */}
      <div className="flex flex-col w-full justify-center items-center gap-8 mt-12">
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
