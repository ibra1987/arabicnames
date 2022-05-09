import Hero from "../components/Home/Hero";
import connecion from "../database/DBConnect";
import Name from "../models/Name";
import LatestPosts from "../components/Home/LatestPosts";
import Subscribe from "../components/Home/Subscribe";
import RandomNames from "../components/Home/RandomNames";
import getAll from "../utils/contentful/getAll";
import LeaderBoard from "../components/ads/LeaderBoard";

const Home = ({ posts, randomNames }) => {
  return (
    <section className="w-full relative flex flex-col justify-start items-center">
      <Hero />
      <LeaderBoard />
      <h3 className="w-full text-center mt-10  tracking-widest text-3xl py-4 font-bold handWriting text-gray-700">
        Random Names
      </h3>
      <RandomNames randomNames={JSON.parse(randomNames)} />
      <h3 className="w-full text-center tracking-widest text-3xl py-4 font-bold handWriting text-gray-700">
        Latest Blog Posts
      </h3>

      <LatestPosts posts={posts} />

      <Subscribe />
    </section>
  );
};
export default Home;

export async function getStaticProps() {
  const res = await getAll("blog");
  const randomNames = await Name.aggregate([{ $sample: { size: 3 } }]);

  return {
    props: {
      posts: res.items,
      randomNames: JSON.stringify(randomNames),
    },
    revalidate: 10,
  };
}
