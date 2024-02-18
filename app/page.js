import Image from "next/image";
import {
  PrimaryButton,
  SecondaryButton,
  ContactButton,
} from "./components/button";

import Header from "./components/header";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main className="bg-dark text-white flex min-h-screen flex-col items-center justify-between p-6 border border-red-500 border-solid">
      <div className=" max-w-7xl w-full items-left justify-between text-sm lg:flex flex-col border-2 border-blue-500 border-solid">
        <Header></Header>
        <h1 className="border border-solid border-white text-center">
          justin_byrd
        </h1>
        <div className="text-4xl border border-dashed border-white ">
          About Me
        </div>
        <div className="text-4xl border border-dashed border-white">
          Project 1(maybe only one until CMS gets installed)
        </div>
        <div className="text-4xl border border-dashed border-white">
          Project 2
        </div>
        <div className="text-4xl border border-dashed border-white">
          Project 3
        </div>
      </div>
      <PrimaryButton>LIVE</PrimaryButton>
      <SecondaryButton>CODE</SecondaryButton>
      <ContactButton>Get In Touch</ContactButton>
      <Footer></Footer>
    </main>
  );
}
