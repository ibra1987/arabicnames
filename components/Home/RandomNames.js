import RandomName from "./RandomName";
import { useState } from "react";

const RandomNames = ({ randomNames }) => {
  const [names, setNames] = useState(randomNames);
  const [loading, setLoading] = useState(false);
  const sectionHeadings =
    "w-full text-center px-2 my-4  tracking-widest text-xl md:text-3xl font-bold lato  font-extrabold";

  const btnStyles =
    "w-1/4 bg-white  text-gray-700 tracking-widest font-bold my-6 py-2 rounded-md hover:text-white ease-in duration-300  outline-none border underline shadow-md border-gray-700 hover:bg-gray-700";

  return (
    <section className="w-full  bg-gray-100 border-b mx-auto p-2 mb-6 pb-6  flex flex-col justify-start items-center ">
      <h3 className={sectionHeadings}>Today's Choice</h3>

      <div className="w-full  gap-4 grid grid-cols-1 lg:grid-cols-2 ">
        {names &&
          names.map((name) => <RandomName name={name} key={name._id} />)}
      </div>
    </section>
  );
};

export default RandomNames;
