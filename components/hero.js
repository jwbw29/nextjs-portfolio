import { MainSocials } from "./socials";
import { TfiAngleDown } from "react-icons/tfi";

const Hero = () => {
  return (
    <div className="flex flex-col pb-12 items-center justify-center flex-1">
      <div className="main flex flex-col gap-10 mt-auto">
        <h1 className="text-7xl md:text-9xl text-blue1">justin_byrd</h1>
        <MainSocials />
      </div>
      <div className="projects flex flex-col items-center gap-2 mt-auto">
        <h3 className="text-2xl">Projects</h3>
        <TfiAngleDown />
      </div>
    </div>
  );
};

export default Hero;
