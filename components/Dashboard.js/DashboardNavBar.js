import React from "react";

const NavBar = () => {
  return (
    <nav className="w-full btext-white ">
      <ul className="w-full flex flex-col justify-start items-center  ">
        <li className="w-full border-b border-b-indigo-200 flex justify-start items-center   p-2 cursor-pointer ease-in-out duration-700 hover:rounded hover:bg-indigo-700 hover:text-white">
          <a>Names</a>
        </li>

        <li className="w-full border-b border-b-indigo-200 flex justify-start items-center   p-2 cursor-pointer ease-in-out duration-700 hover:rounded hover:bg-indigo-700 hover:text-white">
          Comments
        </li>
        <li className="w-full border-b border-b-indigo-200 flex justify-start items-center   p-2 cursor-pointer ease-in-out duration-700 hover:rounded hover:bg-indigo-700 hover:text-white">
          Log Out
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
