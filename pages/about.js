import { SiFacebook } from "react-icons/si";
import { RiTwitterFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { SiYoutube } from "react-icons/si";
import Link from "next/link";

const About = () => {
  return (
    <section className="w-full  h-screen bg-gray-300 flex justify-center items-start ">
      <div className="w-3/5 p-2">
        <h1 className="text-xl text-gray-700 m-6 underline">About Us</h1>
        <p className="indent-3 p-4 w-full leading-6 text-sm border rounded border-gray-400">
          arabicnames.com is a website meant to help future parents to choose an
          arabic name for their precious baby girl. the website is developped by
          Brahim DRIOUCH, a Moroccan developper and father of two beautiful
          little girls.
        </p>
      </div>
      <div className="w-2/5 p-2 flex flex-col justify-start items-start">
        <h2 className="w-full p-2 text-center text-lg tracking-widest bg-pink-500 my-6 text-white">
          Contact us
        </h2>
        <ul className="w-full flex flex-col justify-start items-center">
          <li className="w-full  p-2">
            <Link href="https://web.facebook.com/Arabic-Baby-Girl-Name-114048767977490">
              <a
                target="_blank"
                className="w-full  flex justify-start items-center hover:underline "
              >
                <SiFacebook className="text-blue-600 text-xl" />
                <span className="mx-2">Facebook</span>
              </a>
            </Link>
          </li>
          <li className="w-full p-2">
            <Link href="https://twitter.com/arabicgirlname">
              <a
                target="_blank"
                className="w-full  flex justify-start items-center hover:underline "
              >
                <RiTwitterFill className="text-blue-400 text-2xl" />
                <span className="mx-2">Twitter</span>
              </a>
            </Link>
          </li>
          <li className="w-full p-2">
            <Link href="/contact">
              <a className="w-full flex justify-start items-center hover:underline">
                <MdEmail className="text-red-400 text-2xl" />
                <span className="mx-2">Email</span>
              </a>
            </Link>
          </li>
          <li className="w-full  p-2">
            <Link href="https://www.youtube.com/channel/UCe8yZYr9Bc7yKKh9nLfmITw">
              <a
                target="_blank"
                className="w-full flex justify-start items-center hover:underline"
              >
                <SiYoutube className="text-red-600 text-2xl" />
                <span className="mx-2">Youtube</span>
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

About.layout = "defaultLayout";
export default About;
