import { SiFacebook } from "react-icons/si";
import { RiTwitterFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { SiYoutube } from "react-icons/si";
import { AiFillMessage } from "react-icons/ai";
import Link from "next/link";

const About = () => {
  return (
    <section className="w-full flex flex-col md:flex-row justify-start items-center md:justify-center md:items-start ">
      <div className="w-11/2 md:w-3/5 p-2">
        <h1 className="w-full p-2 text-center text-lg tracking-widest bg-pink-500 my-6 text-white">
          About
        </h1>
        <p className="indent-3  p-4 w-full leading-8 text-sm  ">
          <Link href="/">
            <a className="text-pink-500 hover:underline cursor-pointer">
              {" "}
              arabicgirlnames.com
            </a>
          </Link>{" "}
          is a website made by a father of two lovely little girls to assist
          prospective parents in selecting the best arabic girl name for their
          little princess. You'll find a long list of lovely arabic names
          together with their meanings, as well as articles with helpful
          suggestions and information on just about anything related to newborn
          girls.
        </p>
      </div>
      <div className="w-11/12 md:w-2/5 p-2 flex flex-col justify-start items-start">
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
          <li className="w-full p-2">
            <Link href="mailto:team@arabicgirlnames.com">
              <a className="w-full flex justify-start items-center hover:underline">
                <MdEmail className="text-red-400 text-2xl" />
                <span className="mx-2">Email</span>
              </a>
            </Link>
          </li>
          <li className="w-full p-2">
            <Link href="/contact">
              <a className="w-full flex justify-start items-center hover:underline">
                <AiFillMessage className="text-green-400 text-2xl" />
                <span className="mx-2">Message</span>
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
