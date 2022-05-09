import Footer from "../components/Shared/Footer";
import Header from "../components/Shared/Header";
import SideBar from "../components/Shared/SideBar";

export default function Layout({ children }) {
  return (
    <>
      <main className="w-full popins flex flex-col justify-start items-center  ">
        <Header />
        <SideBar />
        {children}
        <Footer />
      </main>
    </>
  );
}
