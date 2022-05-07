import React from "react";
import getAll from "../../utils/contentful/getAll";
import SinglePost from "../../components/Home/SinglePost";
import SearchInput from "../../components/Home/SearchInput";

const Index = ({ posts }) => {
  const InputStyle =
    " focus:border-pink-200 text-gray-800 w-11/12  mx-2 p-2 outline-none border rounded border-gray-200";
  return (
    <section className="w-full flex flex-col justify-start items-center -mt-24 lg:-mt-24 md:-mt-44">
      <SearchInput placeholder={"Search blog posts"} style={InputStyle} />
      <div className=" w-11/12  p-2  md:flex lg:flex-row lg:justify-center lg:items-start  md:flex-col-reverse md:justify-start md:items-center ">
        <div className="lg:w-2/3  grid grid-cols-1 md:grid-cols-3 gap-2 ">
          {posts.map((post) => (
            <SinglePost post={post} key={post.sys.id} />
          ))}
        </div>
        <div className="md:flex md:flex-col  md:justify-start md:items-center  md:w-full lg:w-1/3  hidden rounded-md">
          sidebqr
        </div>
      </div>
    </section>
  );
};

export default Index;

export async function getServerSideProps() {
  const res = await getAll("blog");
  return {
    props: {
      posts: res.items,
    },
  };
}
