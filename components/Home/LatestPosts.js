import SinglePost from "./SinglePost";

const LatestPosts = ({ posts }) => {
  return (
    <section className="w-full mx-auto pb-6   my-6  gap-1 md:gap-10 grid grid-cols-1 lg:grid-cols-2   ">
      {posts.map((post, index) => (
        <SinglePost post={post} key={post.sys.id} />
      ))}
    </section>
  );
};

export default LatestPosts;
