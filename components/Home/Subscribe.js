import Button from "../Shared/Button";

const Subscribe = () => {
  const styles =
    " w-11/12 md:w-1/5 py-2 outline-none bg-pink-500 mx-4 tracking-widest text-white cursor-pointer hover:bg-pink-600  font-bold ease-in duration-300  rounded-md popins";
  return (
    <section className="w-full bg-gray-600 p-2 md:p-4 flex flex-col md:flex-row justify-center items-center">
      <h3 className="w-11/12 md:w-1/2 text-center tracking-widest font-extrabold my-6 text-white popins text-xl">
        Get notified when a new post is published{" "}
      </h3>
      <div className="w-full md:w-1/2 my-6">
        <input
          placeholder="your email"
          className="outline-none  text-gray-700 p-2 w-11/12 md:w-3/5 rounded-md"
        />
        <Button text={"Subscribe"} styles={styles} />
      </div>
    </section>
  );
};

export default Subscribe;
