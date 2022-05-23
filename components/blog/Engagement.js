import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import Link from "next/link";
const Engagement = ({ slug }) => {
  return (
    <div className=" w-full flex md:flex-col justify-around md:justify-start items-center">
      <h3 className="w-full my-4 p-2 text-center text-gray-700">Share</h3>
      <div>
        <IconContext.Provider
          value={{
            className:
              "text-gray-400 border border-gray-400 p-2 my-6  text-5xl rounded-full hover:text-blue-400 hover:border-blue-400 cursor-pointer",
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
            "text-gray-400 border border-gray-400 my-6 p-2  text-5xl rounded-full hover:text-blue-400 hover:border-blue-400 cursor-pointer",
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
    </div>
  );
};

export default Engagement;
