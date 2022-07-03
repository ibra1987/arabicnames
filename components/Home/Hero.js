import Button from "../Shared/Button";
import SearchInput from "./SearchInput";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

const Hero = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const SearchButtonStyles =
    " w-11/12 md:w-1/3 py-2 outline-none bg-gray-500 md:mx-4 tracking-widest text-white cursor-pointer hover:bg-gray-600 hover:text-white font-bold  ease-in duration-300  rounded-md popins";
  const ExploreButtonStyles =
    " w-11/12 py-2 bg-white md:mx-4 ouline-none  tracking-widest border border-gray-700  font-bold text-gray-700 cursor-pointer hover:bg-gray-700 hover:text-white ease-in duration-300   rounded-md popins";
  const InputStyle =
    " focus:border-pink-200 text-gray-800 w-full my-4  mx-2 p-2 outline-none border rounded border-gray-200";
  const onChange = (e) => {
    setSearch(e.target.value);
  };
  const handleSubmit = () => {
    if (search) {
      router.push("/arabic-girl-names-with-meaning?search=" + search);
    }
  };

  return (
    <section className="mb-4 py-10 w-full md:w-4/5  bg-white border flex mt-4 shadow-lg rounded-md border-b flex-col justify-center  items-center ">
      <h2 className="tracking-widest text-xl md:text-2xl  lg:text-3xl text-black  text-center font-extrabold">
        Find The Best Arabic Girl Name Ever
      </h2>
      <SearchInput
        placeholder={"Search names by alphabets or meaning..."}
        style={InputStyle}
        changeHandler={onChange}
        value={search}
      />
      <div className="w-full md:flex-row flex-col  flex justify-center items-center">
        <Button
          styles={SearchButtonStyles}
          text={"Search"}
          clickHandler={handleSubmit}
        />
        <h3 className="tracking-wide text-center font-bold block w-1/3">Or</h3>
        <Link href="/arabic-girl-names-with-meaning">
          <a className=" w-full md:w-1/3 flex justify-center items-center ">
            <Button
              styles={ExploreButtonStyles}
              text={"Explore Our Full List"}
            />
          </a>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
