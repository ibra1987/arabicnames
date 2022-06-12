import SinglePost from "./SinglePost";
import CardAd from "../ads/CardAd";

const LatestPosts = ({ posts }) => {
  return (
    <section className="w-11/12 pb-6 border-b md:w-full p-2 my-6  text-center gap-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {posts.map((post, index) => (
        <>
          <SinglePost post={post} key={post.sys.id} />
          {index === 2 && <CardAd />}
        </>
      ))}
    </section>
  );
};

export default LatestPosts;
