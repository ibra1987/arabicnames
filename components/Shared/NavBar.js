import Link from "next/link";
import { useRouter } from "next/router";
//import axios from "axios";
//import Spinner from "./Spinner";

const NavBar = () => {
  const router = useRouter();
  //const { isLoading, loadingActions } = useContext(LoadingContext);

  return (
    <nav className="flex justify-between items-center  ">
      <ul className=" flex  justify-end items-center px-2 ">
        <li
          className="mx-2
        "
        >
          <Link href="/">
            <a
              className={
                router.pathname === "/"
                  ? "border-b border-gray-500 px-2 py-1  tracking-wider  text-white transition duration-750 ease-in"
                  : "  text-white text-lg  px-2 py-1 pb-2transition border-b border-gray-600 duration-750 ease-in  hover:border-b hover:border-gray-500  "
              }
            >
              Home
            </a>
          </Link>
        </li>
        <li className="mx-2">
          <Link href="/blog">
            <a
              className={
                router.pathname.includes("/blog")
                  ? "border-b border-gray-500 px-2 py-1  tracking-wider  text-white transition duration-750 ease-in"
                  : "  text-white text-lg  px-2 py-1 pb-2transition border-b border-gray-600 duration-750 ease-in  hover:border-b hover:border-gray-500 "
              }
            >
              Blog
            </a>
          </Link>
        </li>
        <li className="mx-2">
          <Link href="/arabic-girls-names-with-meaning">
            <a
              className={
                router.pathname === "/arabic-girls-names-with-meaning"
                  ? "border-b border-gray-500 px-2 py-1  tracking-wider  text-white transition duration-750 ease-in"
                  : "  text-white text-lg  px-2 py-1 pb-2transition border-b border-gray-600 duration-750 ease-in  hover:border-b hover:border-gray-500 "
              }
            >
              Full List
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
