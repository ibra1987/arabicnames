import { DiscussionEmbed } from "disqus-react";
const DisqusComments = ({ post }) => {
  const disqusShortname = "arabicnames";
  const disqusConfig = {
    url: "https://www.arabicgirlnames.com/blog/" + post.fields.slug,
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
