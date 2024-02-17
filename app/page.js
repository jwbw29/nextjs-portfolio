import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 border border-red-500 border-solid">
      <div className=" max-w-7xl w-full items-left justify-between font-mono text-sm lg:flex flex-col border border-blue-500 border-solid">
        <div className="border border-solid border-white">
          Header -left: logo -right: text: Home, button: Get In Touch (route
          this to /contact)
        </div>

        <div className="border border-dashed border-white">
          Body: 'justin_byrd' and socials below that
        </div>
        <div className="border border-dashed border-white">About Me</div>
        <div className="border border-dashed border-white">
          Project 1(maybe only one until CMS gets installed)
        </div>
        <div className="border border-dashed border-white">Project 2</div>
        <div className="border border-dashed border-white">Project 3</div>
      </div>
    </main>
  );
}
