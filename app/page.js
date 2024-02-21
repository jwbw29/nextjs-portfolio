import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import AboutMe from "./components/About";
import Project from "./components/Project";

import projectsData from "../public/projectsData.json";

export default function Home() {
  return (
    <main className="bg-dark text-white flex min-h-screen flex-col items-center p-6 pt-0">
      <div className=" max-w-7xl w-full items-left justify-between text-sm lg:flex flex-col">
        <div className="min-h-screen flex flex-col">
          <Header />
          <Hero />
        </div>
        <AboutMe />
        {projectsData.map((project, i) => (
          <Project key={i} project={project} />
        ))}
      </div>
      <Footer />
    </main>
  );
}
