import React from "react";
import getAll from "../../utils/contentful/getAll";
import SinglePost from "../../components/Home/SinglePost";
import SearchInput from "../../components/Home/SearchInput";
import { useState } from "react";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

const Index = ({ posts }) => {
  const [postsList, setPostsList] = useState(posts);
  const [search, setSearch] = useState("");

  const displayedPosts = !search
    ? postsList
    : postsList.filter((post) => {
        const inTitle = post.fields.title
          .toLowerCase()
          .includes(search.toLowerCase());
        const inBody = documentToHtmlString(post.fields.body)
          .toLowerCase()
          .includes(search.toLowerCase());
        if (!inTitle) return inBody;
      });
  const handleOnChange = (e) => {
    setSearch(e.target.value);
  };
  const InputStyle =
    " focus:border-gray-600 text-gray-800 w-11/12 my-6  mx-2 p-2 outline-none border border-gray-400 rounded border-gray-200";
  return (
    <section className="w-full flex flex-col justify-start items-center   ">
      <SearchInput
        placeholder={"Search blog posts"}
        style={InputStyle}
        changeHandler={handleOnChange}
      />
      <div className=" w-11/12  p-2  md:flex lg:flex-row lg:justify-center lg:items-start  md:flex-col-reverse md:justify-start md:items-center ">
        <div className="lg:w-2/3  grid grid-cols-1 md:grid-cols-3 gap-2 ">
          {displayedPosts.map((post) => (
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

Index.layout = "defaultLayout";
export default Index;

export async function getServerSideProps() {
  const res = await getAll("blog");
  return {
    props: {
      posts: res.items,
    },
  };
}
