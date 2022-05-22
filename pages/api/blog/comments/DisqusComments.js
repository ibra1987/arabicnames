import { DiscussionEmbed } from "disqus-react";
const DisqusComments = ({ post }) => {
  const disqusShortname = "arabicnames";
  const disqusConfig = {
    url: "http://localhost:3001/" + post.fields.slg,
    identifier: post.sys.id, // Single post id
    title: post.fields.title, // Single post title
  };
  return (
    <div className="w-full p-4">
      <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
    </div>
  );
};
export default DisqusComments;
