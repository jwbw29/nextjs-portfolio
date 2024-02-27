"use client";

import Header from "../../components/header";
import Footer from "../../components/footer";
import { ContactSocials } from "../../components/socials";

const Contact = () => {
  return (
    <main className="bg-dark text-white flex min-h-screen flex-col items-center justify-between p-6 pt-0">
      <div className=" max-w-7xl w-full items-left text-sm lg:flex flex-col ">
        <Header />
        <div className="flex flex-col items-center max-w-full py-12 px-6 ">
          <div className="flex flex-col m-4 gap-16 ">
            <h1 className="text-left text-4xl lg:text-6xl">
              {"Let's Connect!"}
            </h1>
            <div className="flex flex-col gap-8 items-left">
              <div className="flex flex-col gap-1 items-left">
                <div className="flex flex-1 items-center">
                  <h3 className="text-2xl">{"Email"} </h3>
                </div>
                <div className="flex flex-1 items-center text-gray-400">
                  <a
                    href="mailto:justinbyrd7@gmail.com"
                    className=" hover:text-blue-300"
                  >
                    <p className="text-md lg:text-lg">
                      {"✉️ justinbyrd7@gmail.com "}
                    </p>
                  </a>
                </div>
              </div>
            </div>
            <div>
              <ContactSocials />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Contact;
