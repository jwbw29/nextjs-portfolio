import { SocialIcon } from "react-social-icons";

const socialUrls = [
  "http://www.linkedin.com/in/justin-byrd7",
  "http://www.github.com/jwbw29",
  "http://www.facebook.com/justin.byrd",
  "http://www.instagram.com/justin.byrd10",
  "http://www.x.com/tweeter__byrd",
  "http://www.youtube.com/jwbw29",
  "https://t.snapchat.com/plTVcv4U",
];

const MainSocials = () => {
  return (
    <div className="flex md:gap-2">
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
  );
};
const ContactSocials = () => {
  return (
    <div className="flex justify-center gap-2 lg:gap-6">
      {socialUrls.map((url, index) => (
        <SocialIcon
          key={index} // Add a unique key for each icon
          url={url}
          target="_blank"
          className="hover:border hover:border-solid hover:border-white focus:shadow-outline rounded-full hover:shadow-md hover:shadow-blue1"
          style={{ height: 40, width: 40 }}
        />
      ))}
    </div>
  );
};

export { MainSocials, ContactSocials };
