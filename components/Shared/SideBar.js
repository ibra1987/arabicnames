import Link from "next/link";
import Image from "next/image";

const SideBar = ({ suggestedPosts }) => {
  return (
    <aside className="w-full  border flex felx-col justify-start items-center bg-white">
      <div className="w-full flex flex-col justify-start items-center border shadow-md rounded-md">
        <h3 className="w-full p-2 text-white tracking-widest text-center bg-pink-400">
          Read More
        </h3>
        {suggestedPosts?.length > 0 &&
          suggestedPosts.map((post) => (
            <div className="w-full p-2 " key={post.sys.id}>
              <Image
                src={"https:" + post.fields.featuredImage.fields.file.url}
                width={
                  post.fields.featuredImage.fields.file.details.image.width
                }
                height={
                  post.fields.featuredImage.fields.file.details.image.height
                }
              />
              <h2 className="text-gray-700 hover:underline text-lg w-full ">
                <Link href={"/blog/" + post.fields.slug.split(" ").join("-")}>
                  {post.fields.title}
                </Link>
              </h2>
            </div>
          ))}
      </div>
    </aside>
  );
};

export default SideBar;
