import SinglePost from "./SinglePost";

const LatestPosts = ({ posts }) => {
  return (
    <section className="w-11/12 pb-6 border-b md:w-4/5 p-2 my-6  text-center gap-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
      {posts.map((post, index) => (
        <SinglePost post={post} key={post.sys.id} />
      ))}
    </section>
  );
};

export default LatestPosts;
