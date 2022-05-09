import Hero from "../components/Home/Hero";
import LatestPosts from "../components/Home/LatestPosts";
import Subscribe from "../components/Home/Subscribe";
import RandomNames from "../components/Home/RandomNames";
import LeaderBoard from "../components/ads/LeaderBoard";
import { contentful } from "../utils/contentful/config";

const Home = ({ posts, randomNames }) => {
  return (
    <section className="w-full relative flex flex-col justify-start items-center">
      <Hero />
      <LeaderBoard />
      {randomNames && (
        <>
          <h3 className="w-full text-center mt-10  tracking-widest text-3xl py-4 font-bold handWriting text-gray-700">
            Random Names
          </h3>
          <RandomNames randomNames={JSON.parse(randomNames)} />
        </>
      )}
      <h3 className="w-full text-center tracking-widest text-3xl py-4 font-bold handWriting text-gray-700">
        Latest Blog Posts
      </h3>

      <LatestPosts posts={posts} />

      <Subscribe />
    </section>
  );
};
export default Home;

export async function getServerSideProps() {
  const res = await contentful.getEntries({
    content_type: "blog",
  });
  //const randomNames = await Name.aggregate([{ $sample: { size: 3 } }]);

  return {
    props: {
      posts: res.items,
      // randomNames: JSON.stringify(randomNames),
    },
  };
}
