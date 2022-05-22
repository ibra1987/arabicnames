import {
  FaFacebookF,
  FaTwitter,
  FaShareSquare,
  FaInstagramSquare,
  FaComments,
} from "react-icons/fa";
import { IconContext } from "react-icons/lib";

const Engagement = () => {
  return (
    <div className=" w-full flex md:flex-col justify-around md:justify-start items-center">
      <div>
        <IconContext.Provider
          value={{
            className:
              "text-gray-400 border border-gray-400 p-2 my-6  text-5xl rounded-full hover:text-blue-400 hover:border-blue-400 cursor-pointer",
          }}
        >
          <FaFacebookF />
        </IconContext.Provider>
      </div>
      <IconContext.Provider
        value={{
          className:
            "text-gray-400 border border-gray-400 my-6 p-2  text-5xl rounded-full hover:text-blue-400 hover:border-blue-400 cursor-pointer",
        }}
      >
        <FaTwitter />
      </IconContext.Provider>
      <IconContext.Provider
        value={{
          className:
            "text-gray-400 border border-gray-400 my-6 p-2  text-5xl rounded-full hover:text-blue-400 hover:border-blue-400 cursor-pointer",
        }}
      >
        <FaShareSquare />
      </IconContext.Provider>
      <IconContext.Provider
        value={{
          className:
            "text-gray-400 border border-gray-400 my-6 p-2  text-5xl rounded-full hover:text-blue-400 hover:border-blue-400 cursor-pointer",
        }}
      >
        <FaInstagramSquare />
      </IconContext.Provider>
      <IconContext.Provider
        value={{
          className:
            "text-gray-400 border border-gray-400 my-6 p-2  text-5xl rounded-full hover:text-blue-400 hover:border-blue-400 cursor-pointer",
        }}
      >
        <FaComments />
      </IconContext.Provider>
    </div>
  );
};

export default Engagement;
