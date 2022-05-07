import Hero from "../components/Home/Hero";
import LatestPosts from "../components/Home/LatestPosts";
import Subscribe from "../components/Home/Subscribe";
import TodaysChoice from "../components/Home/TodaysChoice";
import getAll from "../utils/contentful/getAll";

const Home = ({ posts }) => {
  return (
    <section className="w-full relative flex flex-col justify-start items-center">
      <Hero />
      <h3 className="w-full text-center mt-48  tracking-widest text-3xl py-4 font-bold handWriting text-gray-700">
        Today's Choice
      </h3>
      <TodaysChoice />
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
  const res = await getAll("blog");
  return {
    props: {
      posts: res.items,
    },
  };
}
