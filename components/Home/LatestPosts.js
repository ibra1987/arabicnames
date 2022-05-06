import SinglePost from "./SinglePost";

const LatestPosts = ({ posts }) => {
  return (
    <section className="w-11/12 md:w-full p-2 my-6  text-center grid grid-cols-2 md:grid-cols-4">
      {posts.map((post) => (
        <SinglePost post={post} key={post.sys.id} />
      ))}
    </section>
  );
};

export default LatestPosts;
