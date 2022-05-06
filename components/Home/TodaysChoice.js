import SingleChoice from "./SingleChoice";

const TodaysChoice = ({ todaysChoice }) => {
  return (
    <section className="w-11/12 md:w-full p-2 text-center grid grid-cols-1 md:grid-cols-3 ">
      <SingleChoice />
      <SingleChoice />
      <SingleChoice />
    </section>
  );
};

export default TodaysChoice;
