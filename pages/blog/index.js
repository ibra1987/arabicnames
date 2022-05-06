import React from "react";
import getAll from "../../utils/contentful/getAll";
import getSingle from "../../utils/contentful/getSingle";

const Index = ({ posts }) => {
  return <div>index</div>;
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
