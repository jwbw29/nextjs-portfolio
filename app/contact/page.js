import Image from "next/image";

import Header from "../components/Header";
import Footer from "../components/Footer";
import EmailForm from "../components/EmailForm";
import { ContactSocials } from "../components/Socials";

import arrow from "../../public/rotated-right-arrow-svgrepo-com.svg";

const Contact = () => {
  return (
    <main className="bg-dark text-white flex min-h-screen flex-col items-center justify-between p-6">
      <div className=" max-w-7xl w-full my-2 items-left justify-between text-sm lg:flex flex-col">
        <Header />
        <div className="flex max-w-full py-12 px-6">
          <div className="flex flex-col w-1/2 m-4 gap-16 ">
            <div>
              <h1>Let's Connect!</h1>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-1 items-center">
                <h3>Send me an email {"------->"} </h3>
              </div>
              <div>
                <h3>
                  or schedule a meeting{" "}
                  <a
                    href="https://calendly.com/justin-byrd7"
                    target="_blank"
                    className="underline text-blue1 hover:text-blue-300"
                  >
                    here
                  </a>
                </h3>
              </div>
            </div>
            <div>
              <ContactSocials />
            </div>
          </div>
          <div className="w-1/2 m-4">
            <EmailForm />{" "}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Contact;
