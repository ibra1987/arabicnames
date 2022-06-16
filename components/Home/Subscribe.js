import Button from "../Shared/Button";

const Subscribe = () => {
  const styles =
    " w-11/12 md:w-2/5 py-3 outline-none bg-gray-600 mx-4 tracking-widest text-white cursor-pointer hover:bg-gray-700  font-bold ease-in duration-300  rounded-md popins";
  return (
    <section className="w-full rounded bg-pink-400 p-2 md:p-4 flex flex-col md:flex-row justify-center items-center">
      <h3 className="w-11/12 md:w-1/3 text-center tracking-widest font-extrabold my-2 text-white lato text-lg md:text-xl lg:text-2xl">
        Get notified when a new post is published{" "}
      </h3>
      <form
        className="w-full md:w-1/2 my-6 text-center"
        action="https://arabicgirlnames.us14.list-manage.com/subscribe/post"
      >
        <input type="hidden" name="u" value="3b909ecbd5a9f5022da5026e0" />
        <input type="hidden" name="id" value="104a983e16" />
        <input type="hidden" name="orig-lang" value="1" />
        <input
          placeholder="your email"
          name="MERGE0"
          id="MERGEO"
          className="outline-none py-3 text-gray-700 p-2 my-4 w-11/12 md:w-1/2 rounded-md"
        />
        <Button type="submit" text={"Subscribe"} styles={styles} />
        <input type="hidden" name="mc_signupsource" value="hosted" />{" "}
      </form>
    </section>
  );
};

export default Subscribe;
