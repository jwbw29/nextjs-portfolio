import Header from "../components/header";
import Footer from "../components/footer";
import Hero from "../components/hero";
import AboutMe from "../components/about";
import Project from "../components/project";

import projectsData from "../public/projectsData.json";

export default function Home() {
  return (
    <main className="bg-dark text-white flex min-h-screen flex-col items-center p-6 pt-0">
      <div className=" max-w-7xl w-full items-left justify-between text-sm lg:flex flex-col ">
        <div className="min-h-screen flex flex-col">
          <Header />
          <Hero />
        </div>
        {/* TODO */}
        <AboutMe />
        {/* TODO */}
        {projectsData.map((project, i) => (
          <Project key={i} project={project} />
        ))}
      </div>
      {/* TODO */}
      <Footer />
    </main>
  );
}
