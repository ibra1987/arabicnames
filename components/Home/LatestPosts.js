import SinglePost from "./SinglePost";

const LatestPosts = ({ posts }) => {
  return (
    <section className="w-full md:w-4/5 mx-auto pb-6  p-4 my-6  gap-4 md:gap-10 grid grid-cols-1 sm:grid-cols-2   ">
      {posts.map((post, index) => (
        <SinglePost post={post} key={post.sys.id} />
      ))}
    </section>
  );
};

export default LatestPosts;
