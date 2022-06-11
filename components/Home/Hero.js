import Button from "../Shared/Button";
import SearchInput from "./SearchInput";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

const Hero = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const SearchButtonStyles =
    " w-11/12 md:w-2/5 py-2 outline-none bg-pink-500 mx-4 tracking-widest text-white cursor-pointer hover:bg-white hover:text-pink-500 font-bold hover:border hover:border-pink-500 ease-in duration-300  rounded-md popins";
  const ExploreButtonStyles =
    " w-full py-2 bg-white mx-4 ouline-none border tracking-widest border-pink-500 font-bold text-pink-500 cursor-pointer hover:bg-pink-500 hover:text-white ease-in duration-300   rounded-md popins";
  const InputStyle =
    " focus:border-pink-200 text-gray-800 md:w-3/5 my-4  mx-2 p-2 outline-none border rounded border-gray-200";
  const onChange = (e) => {
    setSearch(e.target.value);
  };
  const handleSubmit = () => {
    if (search) {
      router.push("/arabic-girl-names-with-meaning?search=" + search);
    }
  };

  return (
    <section className=" py-10 w-full flex mt-8   shadow-lg rounded-md border-b flex-col justify-center  items-center ">
      <h2 className="tracking-widest text-xl md:text-2xl  lg:text-3xl text-gray-600  text-center font-extrabold">
        Find An Arabic Name For Your Baby Girl
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
        <h3 className="tracking-wide text-gray font-bold">Or</h3>
        <Link href="/arabic-girl-names-with-meaning">
          <a className=" w-11/12 md:w-2/5 ">
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
