import Footer from "../components/Shared/Footer";
import Header from "../components/Shared/Header";

export default function Layout({ children }) {
  return (
    <>
      <main className=" max-w-11/12 md:w-3/5 mx-auto popins flex flex-col justify-start items-center  ">
        <Header />
        {children}
        <Footer />
      </main>
    </>
  );
}
