import RandomName from "./RandomName";
import getRandomNames from "../../utils/http/names/getRandomNames";
import Button from "../Shared/Button";
import axios from "axios";
import { useState, useEffect } from "react";

const RandomNames = () => {
  const [names, setNames] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    let mounted = true;

    getNames().then((names) => {
      if (mounted) setNames(names);
    });

    return () => (mounted = false);
  }, []);
  const getNames = async () => {
    try {
      const response = await axios.post(
        "/api/names/random-names",
        {
          token: process.env.NEXT_PUBLIC_FRONTEND_KEY,
        },
        {
          headers: {
            "content-type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };
  const btnStyles =
    "w-1/4 bg-white text-gray-700 tracking-widest font-bold my-6 py-2 rounded-md hover:text-white ease-in duration-300  outline-none border underline shadow-md border-gray-700 hover:bg-gray-700";

  if (!names) return <div>Loading ...</div>;
  return (
    <section className="w-11/12 md:w-full p-2  flex flex-col justify-start items-center ">
      <div className="w-full  gap-2 grid grid-cols-1 sm:grid-cols-3">
        {names.length > 0 &&
          names.map((name) => <RandomName name={name} key={name._id} />)}
      </div>
    </section>
  );
};

export default RandomNames;
