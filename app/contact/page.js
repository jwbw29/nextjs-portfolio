import Header from "../components/Header";
import Footer from "../components/Footer";
import EmailForm from "../components/EmailForm";
import { ContactSocials } from "../components/Socials";

const Contact = () => {
  return (
    <main className="bg-dark text-white flex min-h-screen flex-col items-center justify-between p-6 border border-red-500 border-solid">
      <div className=" max-w-7xl w-full items-left justify-between text-sm lg:flex flex-col border-2 border-blue-500 border-solid">
        <Header />
        <div className="flex max-w-full border-2 border-solid border-white">
          <div className="w-1/2 m-4 border border-dashed border-green-500">
            <h1>Get In Touch</h1>
            <p>Would love to hear from you!</p>
            <p>
              Send me an email or schedule a meeting{" "}
              <a
                href="https://calendly.com/justin-byrd7"
                target="_blank"
                className="underline"
              >
                here
              </a>
            </p>
            <ContactSocials />
          </div>
          <div className="w-1/2 m-4 border border-dashed border-green-500">
            {/*Use this link for guidance: https://v1.tailwindcss.com/components/forms#form-grid */}
            {/*Use this link to build the functionality: https://www.youtube.com/watch?v=t2LvPXHLrek */}
            <EmailForm />{" "}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Contact;
