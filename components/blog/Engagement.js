import { FaFacebookF, FaTwitter, FaPinterest } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import Link from "next/link";
const Engagement = ({ slug }) => {
  return (
    <div className=" w-full flex md:flex-col justify-around md:justify-start items-center">
      <span className="text-sm bg-cyan-700 text-center tracking-widest  font-bold text-white">
        Spread The Word
      </span>
      <div>
        <IconContext.Provider
          value={{
            className:
              "text-blue-600 border border-blue-600 p-2 my-6  text-5xl rounded-full hover:text-blue-700 hover:border-blue-700 cursor-pointer",
          }}
        >
          <Link
            href={`http://www.facebook.com/share.php?u=https://arabicgirlnames.com/blog/${slug}`}
          >
            <a target="_blank">
              <FaFacebookF />
            </a>
          </Link>
        </IconContext.Provider>
      </div>
      <IconContext.Provider
        value={{
          className:
            "text-blue-400 border border-blue-400 my-6 p-2  text-5xl rounded-full hover:text-blue-500 hover:border-blue-500 cursor-pointer",
        }}
      >
        <Link
          href={`https://twitter.com/intent/tweet?url=https://arabicgirlnames.com/blog/${slug}`}
        >
          <a target="_blank">
            <FaTwitter />
          </a>
        </Link>
      </IconContext.Provider>
      <IconContext.Provider
        value={{
          className:
            "text-red-600 border  border-red-600 my-6 p-2 flex flex-col justify-start items-center  text-5xl rounded-full hover:text-red-700 hover:border-red-700 cursor-pointer",
        }}
      >
        <Link href={`https://www.pinterest.com/pin/create/button/`}>
          <a target="_blank">
            <FaPinterest />
          </a>
        </Link>
      </IconContext.Provider>
    </div>
  );
};

export default Engagement;
