import RandomName from "./RandomName";
import { useState } from "react";

const RandomNames = ({ randomNames }) => {
  const [names, setNames] = useState(randomNames);
  const [loading, setLoading] = useState(false);

  const btnStyles =
    "w-1/4 bg-white  text-gray-700 tracking-widest font-bold my-6 py-2 rounded-md hover:text-white ease-in duration-300  outline-none border underline shadow-md border-gray-700 hover:bg-gray-700";

  return (
    <section className="w-11/12 border-b md:w-full p-2 mb-6 pb-6  flex flex-col justify-start items-center ">
      <div className="w-full  gap-1 grid grid-cols-1 sm:grid-cols-3">
        {names &&
          names.map((name) => <RandomName name={name} key={name._id} />)}
      </div>
    </section>
  );
};

export default RandomNames;
