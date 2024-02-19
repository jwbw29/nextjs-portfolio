import Header from "./components/Header";
import Footer from "./components/Footer";

import AboutMe from "./components/About";
import Project from "./components/Project";

import projectsData from "../public/projectsData.json";

export default function Home() {
  return (
    <main className="bg-dark text-white flex min-h-screen flex-col items-center p-6 border border-red-500 border-solid">
      <div className=" max-w-7xl w-full items-left justify-between text-sm lg:flex flex-col border-2 border-blue-500 border-solid">
        <Header />
        <div className="flex border border-solid border-white items-center justify-center">
          <h1>justin_byrd</h1>
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
