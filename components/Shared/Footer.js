import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-11/12 mt-10 py-4 border md:w-full bg-gray-100 flex flex-col justify-center items-center">
      <div className="w-full flex justify-center items-center my-2">
        <Link href="/contact">
          <a className="px-4 text-pink-400 text-sm font-bold ">Contact us</a>
        </Link>
        <Link href="/about">
          <a className="px-4 text-pink-400 text-sm font-bold  border-l border-gray-500">
            About
          </a>
        </Link>
        <Link href="/privacy-policy">
          <a className="px-4 text-pink-400 text-sm font-bold  border-l border-gray-500">
            Privacy
          </a>
        </Link>
      </div>
      <div className="text-xs tracking-wider text-gray-700">
        Arabic Girl Names &copy; 2022
      </div>
    </footer>
  );
};

export default Footer;
