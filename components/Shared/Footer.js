import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full  py-4 md:w-full bg-gray-600 flex flex-col justify-center items-center">
      <div className="w-full flex justify-center items-center my-2">
        <Link href="/contact">
          <a className="px-4 text-pink-200 text-sm font-bold ">Contact us</a>
        </Link>
        <Link href="/about">
          <a className="px-4 text-pink-200 text-sm font-bold  border-l border-gray-100">
            About
          </a>
        </Link>
        <Link href="/privacy-policy">
          <a className="px-4 text-pink-200 text-sm font-bold  border-l border-gray-100">
            Privacy
          </a>
        </Link>
      </div>
      <div className="text-xs tracking-wider text-gray-100">
        Arabic Girl Names &copy; 2022
      </div>
    </footer>
  );
};

export default Footer;
