import SinglePost from "./SinglePost";

const LatestPosts = ({ posts }) => {
  return (
    <section className="pb-6 border-b  p-2 my-6  gap-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  ">
      {posts.map((post, index) => (
        <SinglePost post={post} key={post.sys.id} />
      ))}
    </section>
  );
};

export default LatestPosts;
