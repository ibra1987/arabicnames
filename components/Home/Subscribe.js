import Button from "../Shared/Button";

const Subscribe = () => {
  const styles =
    " w-11/12 md:w-2/5 py-3 outline-none bg-pink-500 mx-4 tracking-widest text-white cursor-pointer hover:bg-pink-600  font-bold ease-in duration-300  rounded-md popins";
  return (
    <section className="w-full bg-gray-600 p-2 md:p-4 flex flex-col md:flex-row justify-center items-center">
      <h3 className="w-11/12 md:w-1/2 text-center tracking-widest font-extrabold my-2 text-white popins text-sm md:text-lg lg:text-xl">
        Get notified when a new post is published{" "}
      </h3>
      <div className="w-full md:w-1/2 my-6 text-center">
        <input
          placeholder="your email"
          className="outline-none py-3 text-gray-700 p-2 my-4 w-11/12 md:w-1/2 rounded-md"
        />
        <Button text={"Subscribe"} styles={styles} />
      </div>
    </section>
  );
};

export default Subscribe;
