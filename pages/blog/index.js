import getAll from "../../utils/contentful/getAll";
import SinglePost from "../../components/Home/SinglePost";
import SearchInput from "../../components/Home/SearchInput";
import { useState } from "react";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import Head from "next/head";
import SideBar from "../../components/Shared/SideBar";

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
      <Head>
        <title>Arabic girl names- blog</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="How to choose a perfect baby girl name four your princess"
        />
        <meta name="robots" content="index, follow" />
      </Head>
      <SearchInput
        placeholder={"Search blog posts"}
        style={InputStyle}
        changeHandler={handleOnChange}
      />
      <div className=" w-11/12  p-2  md:flex lg:flex-row lg:justify-center lg:items-start  md:flex-col-reverse md:justify-start md:items-center ">
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-2 ">
          {displayedPosts.map((post) => (
            <SinglePost post={post} key={post.sys.id} />
          ))}
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
