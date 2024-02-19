import Header from "../components/Header";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <main className="bg-dark text-white flex min-h-screen flex-col items-center justify-between p-6 border border-red-500 border-solid">
      <div className=" max-w-7xl w-full items-left justify-between text-sm lg:flex flex-col border-2 border-blue-500 border-solid">
        <Header></Header>
        <div>Body</div>
      </div>
      <Footer></Footer>
    </main>
  );
};

export default Contact;
