import Button from "../Shared/Button";
import SearchInput from "./SearchInput";

const Hero = () => {
  const SearchButtonStyles =
    " w-11/12 md:w-1/5 py-2 outline-none bg-pink-500 mx-4 tracking-widest text-white cursor-pointer hover:bg-white hover:text-pink-500 font-bold hover:border hover:border-pink-500 ease-in duration-300  rounded-md popins";
  const ExploreButtonStyles =
    " w-11/12 md:w-1/5 py-2 bg-white mx-4 ouline-none border tracking-widest border-pink-500 font-bold text-pink-500 cursor-pointer hover:bg-pink-500 hover:text-white ease-in duration-300   rounded-md popins";

  const handleSubmit = () => {
    console.log("clicked");
  };
  const handleExplore = () => {
    console.log("clicked");
  };
  return (
    <section className="my-6 w-full flex flex-col justify-center items-center">
      <h2 className="tracking-widest text-3xl text-gray-600 handWriting text-center font-extrabold">
        Find An Arabic Name Four Your Baby Girl
      </h2>
      <SearchInput />
      <div className="w-full md:flex-row flex-col  flex justify-center items-center">
        <Button
          styles={SearchButtonStyles}
          text={"Search"}
          clickHandler={handleSubmit}
        />
        <h3>Or</h3>
        <Button
          styles={ExploreButtonStyles}
          text={"Explore Our Full List"}
          clickHandler={handleExplore}
        />
      </div>
    </section>
  );
};

export default Hero;
