import Footer from "../components/Shared/Footer";
import Header from "../components/Shared/Header";

export default function Layout({ children }) {
  return (
    <>
      <main className=" w-11/12 bg-white border shadow-md mx-auto popins flex flex-col justify-start items-center  ">
        <Header />
        {children}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MLTR7GT"
      height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
        <Footer />
      </main>
    </>
  );
}
