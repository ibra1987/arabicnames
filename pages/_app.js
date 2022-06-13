import "../styles/globals.css";
import defaultLayout from "../layouts/Default";
import EmptyLayout from "../layouts/empty";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const layouts = {
  defaultLayout,
  Empty: EmptyLayout,
};
function MyApp({ Component, pageProps }) {
  const Layout = layouts[Component.layout] || ((children) => <>{children}</>);
  return (
    <Layout>
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-MLTR7GT');
      `}
      </Script>
      <Component {...pageProps} />
      <ToastContainer theme="colored" />
    </Layout>
  );
}

export default MyApp;
