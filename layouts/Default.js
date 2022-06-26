import Footer from "../components/Shared/Footer";
import Header from "../components/Shared/Header";

export default function Layout({ children }) {
  return (
    <>
      <main className=" w-11/12 bg-white border shadow-md mx-auto popins flex flex-col justify-start items-center  ">
        <Header />
        {children}

        <Footer />
      </main>
    </>
  );
}
