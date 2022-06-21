import { useState } from "react";
import Link from "next/link";
import { SiFacebook } from "react-icons/si";
import { RiTwitterFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { SiYoutube } from "react-icons/si";
import { AiFillMessage } from "react-icons/ai";
import Head from "next/head";

const Contact = () => {
  const [localError, setlocalError] = useState("");
  const [success, setSuccess] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    body: "",
  });
  const onChange = (e) => {
    setlocalError("");
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setlocalError("");
    setSuccess("");
    const { name, email, body } = formData;
    if (!name) return setlocalError("Please enter your name");
    if (!email) return setlocalError("PLease enter your email");
    if (!body) return setlocalError("Please enter your message");
  };

  return (
    <section className="w-full flex flex-col justify-start items-center md:flex-row md:justify-center md:items-start ">
      <div className="w-11/12 md:w-3/5 p-2">
        <h1 className="w-full  p-2 text-center text-lg tracking-widest bg-pink-500 my-6 text-white">
          Send us a message
        </h1>
        {localError && (
          <div className="w-full text-center p-4 text-red-500 tracking-wider">
            {localError}
          </div>
        )}
        <form
          className="w-11/12 flex p-2 flex-col justify-start items-center"
          onSubmit={onSubmit}
        >
          <div className="w-full flex justify-center items-center my-2">
            <input
              type="text"
              placeholder="Your name"
              className="p-2 w-11/12 outline-none border rounded border-gray-300"
              name="name"
              value={formData.name}
              onChange={onChange}
            />
          </div>
          <div className="w-full flex justify-center items-center my-2 ">
            <input
              className="p-2 w-11/12 outline-none border rounded border-gray-300"
              type="email"
              placeholder="Your email"
              name="email"
              value={formData.email}
              onChange={onChange}
            />
          </div>
          <div className="w-full flex justify-center items-center my-2 ">
            <textarea
              rows="10"
              className="p-2 w-11/12 outline-none border rounded border-gray-300 resize-none"
              placeholder="your message..."
              name="body"
              value={formData.body}
              onChange={onChange}
            ></textarea>
          </div>
          <div className="w-full flex justify-center items-center my-2 ">
            <input
              type="submit"
              value="Send"
              className=" w-11/12 p-2 rounded bg-pink-500 cursor-pointer hover:bg-pink-600 tracking-widest text-xl text-white"
            />
          </div>
        </form>
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
Contact.layout = "defaultLayout";

export default Contact;
