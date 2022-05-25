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
      <Component {...pageProps} />
      <ToastContainer theme="colored" />
    </Layout>
  );
}

export default MyApp;
