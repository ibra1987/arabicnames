import Hero from "../components/Home/Hero";
import LatestPosts from "../components/Home/LatestPosts";
import Subscribe from "../components/Home/Subscribe";
import RandomNames from "../components/Home/RandomNames";
import LeaderBoard from "../components/ads/LeaderBoard";
import { contentful } from "../utils/contentful/config";
import RandomName from "../models/RandomName";
import connection from "../database/DBConnect";

const Home = ({ posts, randomNames }) => {
  return (
    <section className="w-full relative flex flex-col justify-start items-center">
      <Hero />
      <LeaderBoard />

      <>
        <h3 className="w-full text-center mt-10  tracking-widest text-3xl py-4 font-boldpopins  text-gray-700">
          Random Names
        </h3>
        <RandomNames randomNames={randomNames} />
      </>

      <h3 className="w-full text-center tracking-widest text-3xl py-4 font-boldpopins  text-gray-700">
        Latest Blog Posts
      </h3>

      <LatestPosts posts={posts} />

      <Subscribe />
    </section>
  );
};
Home.layout = "defaultLayout";
export default Home;

export async function getServerSideProps() {
  const { items } = await contentful.getEntries({
    content_type: "blog",
  });
  const defaultNames = [
    {
      _id: "61cf89527315e1586e0c037b",
      Name: "Assia",
      Meaning: "confort person or sad meditating",
    },
    {
      _id: "61ce357390bd324aca2226e1",
      Name: "Arij",
      Meaning: "Good fragrant scent.",
    },

    {
      _id: "61cf8b547315e1586e0c0387",
      Name: "Bacha'ir",
      Meaning: "means the beginnings",
    },
  ];
  await connection();
  let names = await RandomName.find();

  if (!names) {
    names = defaultNames;
  }

  return {
    props: {
      posts: items,
      randomNames: JSON.parse(JSON.stringify(names)),
    },
  };
}
