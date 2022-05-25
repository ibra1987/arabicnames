import Button from "../Shared/Button";

const Subscribe = () => {
  const styles =
    " w-11/12 md:w-2/5 py-3 outline-none bg-pink-500 mx-4 tracking-widest text-white cursor-pointer hover:bg-pink-600  font-bold ease-in duration-300  rounded-md popins";
  return (
    <section className="w-full bg-gray-600 p-2 md:p-4 flex flex-col md:flex-row justify-center items-center">
      <h3 className="w-11/12 md:w-1/2 text-center tracking-widest font-extrabold my-2 text-white popins text-sm md:text-lg lg:text-xl">
        Get notified when a new post is published{" "}
      </h3>
      <form
        className="w-full md:w-1/2 my-6 text-center"
        action="https://arabicgirlnames.us14.list-manage.com/subscribe/post"
      >
        <input
          placeholder="your email"
          name="MERGE0"
          id="MERGEO"
          className="outline-none py-3 text-gray-700 p-2 my-4 w-11/12 md:w-1/2 rounded-md"
        />
        <input type="hidden" name="id" value="104a983e16"></input>
        <input type="hidden" name="u" value="3b909ecbd5a9f5022da5026e0"></input>
        <Button type="submit" text={"Subscribe"} styles={styles} />
      </form>
    </section>
  );
};

export default Subscribe;
