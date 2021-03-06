import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";
import { IconContext } from "react-icons/lib";
//import axios from "axios";
//import Spinner from "./Spinner";

const NavBar = () => {
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(false);
  const ulClassHidden =
    " hidden flex-row md:flex duration-700     ease-in-out transition-all w-2/3  transition-all   duration-700 ease-in-out text-sm md:text-lg justify-end items-center px-2  ";
  const ulClassDisplay =
    "w-2/3 flex-row md:flex transition-all  duration-700 ease-in-out text-sm md:text-lg justify-end items-center px-2 ";
  const liClass = "my-2 mx-1 w-24 text-center py-2 ";
  const linkClass =
    " block w-full  py-1   tracking-widest  text-gray-100 hover:text-white rounded hover:bg-pink-500 transition duration-750 ease-in";
  const activeLinkClass =
    "    block w-full py-1 transition tracking-widest  bg-pink-500 text-white duration-750 ease-in rounded  ";
  //const { isLoading, loadingActions } = useContext(LoadingContext);

  useEffect(() => {
    window.addEventListener("resize", handleResize, false);
  }, []);

  const handleResize = () => {
    return setShowMenu(false);
  };

  return (
    <nav className="w-3/5 mx-4 flex flex-col  md:flex-row justify-center md:justify-end items-end   ">
      <IconContext.Provider
        value={{ className: "text-gray-200 w-1/3 h-6 md:hidden" }}
      >
        {!showMenu && <GiHamburgerMenu onClick={() => setShowMenu(true)} />}
      </IconContext.Provider>
      <IconContext.Provider
        value={{ className: "text-gray-200 w-1/3 h-8 md:hidden" }}
      >
        {showMenu && <CgClose onClick={() => setShowMenu(false)} />}
      </IconContext.Provider>
      <ul className={showMenu ? ulClassDisplay : ulClassHidden}>
        <li className={liClass} onClick={() => setShowMenu(false)}>
          <Link href="/">
            <a
              className={router.pathname === "/" ? activeLinkClass : linkClass}
            >
              Home
            </a>
          </Link>
        </li>
        <li className={liClass} onClick={() => setShowMenu(false)}>
          <Link href="/blog">
            <a
              className={
                router.pathname.includes("/blog") ? activeLinkClass : linkClass
              }
            >
              Blog
            </a>
          </Link>
        </li>
        <li className={liClass} onClick={() => setShowMenu(false)}>
          <Link href="/arabic-girl-names-with-meaning">
            <a
              className={
                router.pathname === "/arabic-girl-names-with-meaning"
                  ? activeLinkClass
                  : linkClass
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
