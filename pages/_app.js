import "../styles/globals.css";
import defaultLayout from "../layouts/Default";
import EmptyLayout from "../layouts/empty";

const layouts = {
  defaultLayout,
  Empty: EmptyLayout,
};
function MyApp({ Component, pageProps }) {
  const Layout = layouts[Component.layout] || ((children) => <>{children}</>);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
