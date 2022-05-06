import Link from "next/link";
import { useRouter } from "next/router";
//import axios from "axios";
//import Spinner from "./Spinner";

const NavBar = () => {
  const router = useRouter();
  //const { isLoading, loadingActions } = useContext(LoadingContext);

  return (
    <nav className="flex justify-between items-center  py-4 ">
      <ul className=" flex  justify-end items-center px-2 ">
        <li
          className="mx-4 
        "
        >
          <Link href="/">
            <a
              className={
                router.pathname === "/"
                  ? "bg-pink-500 text-red px-4 py-2 rounded text-white transition duration-500 ease-in"
                  : " bg-white text-pink-500 "
              }
            >
              Home
            </a>
          </Link>
        </li>
        <li className="mx-4 ">
          <Link href="/blog">
            <a
              className={
                router.pathname === "/blog"
                  ? "bg-pink-500 text-red px-4 py-2 rounded text-white transition duration-500 ease-in"
                  : " bg-white text-pink-500"
              }
            >
              Blog
            </a>
          </Link>
        </li>
        <li className="mx-4 ">
          <Link href="/full-list">
            <a
              className={
                router.pathname === "/full-list"
                  ? "bg-pink-500 text-red px-4 py-2 rounded text-white transition duration-500 ease-in"
                  : " bg-white text-pink-500"
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
