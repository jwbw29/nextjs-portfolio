import { SocialIcon } from "react-social-icons";

const socialUrls = [
  "http://www.linkedin.com/in/justin-byrd7",
  "http://www.github.com/jwbw29",
  "http://www.facebook.com/justin.byrd",
  "http://www.instagram.com/justin.byrd10",
  "http://www.x.com/tweeter__byrd",
  "http://www.youtube.com/jwbw29",
];

const Hero = () => {
  return (
    <div className="flex flex-col gap-10 border border-solid border-white items-center justify-center flex-1">
      <h1 className="text-9xl text-blue1">justin_byrd</h1>
      <div className="flex gap-2">
        {socialUrls.map((url, index) => (
          <SocialIcon
            key={index} // Add a unique key for each icon
            url={url}
            target="_blank"
            bgColor="#2D2D2D"
            fgColor="white"
            className="hover:border hover:border-solid hover:border-white focus:shadow-outline rounded-full hover:shadow-md hover:shadow-blue1"
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
