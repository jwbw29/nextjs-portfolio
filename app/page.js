import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 border border-red-500 border-solid">
      <div className=" max-w-7xl w-full items-left justify-between text-sm lg:flex flex-col border border-blue-500 border-solid">
        <h1 className="border border-solid border-white">
          Header -left: logo -right: text: Home, button: Get In Touch (route
          this to /contact)
        </h1>

        <div className="border border-dashed border-white">
          Body: 'justin_byrd' and socials below that
        </div>
        <h2 className="border border-dashed border-white ">About Me</h2>
        <h2 className="border border-dashed border-white">
          Project 1(maybe only one until CMS gets installed)
        </h2>
        <h2 className="border border-dashed border-white">Project 2</h2>
        <h2 className="border border-dashed border-white">Project 3</h2>
      </div>
    </main>
  );
}
