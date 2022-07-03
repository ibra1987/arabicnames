import Image from "next/image";
import { useRef } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Link from "next/link";

const SinglePost = ({ post }) => {
  const { featuredImage, title, excerpt, slug } = post.fields;
  const lazyRoot = useRef(null);
  const w = featuredImage.fields.file.details.image.height;
  return (
    <div
      className="p-1   cursor-pointer scale bg-gray-50 mb-6  shadow-lg  text-gray-700  transition-colors ease-in-out duration-150  flex flex-col md:flex-row md:justify-center  justify-start md:items-center items-center   "
      ref={lazyRoot}
    >
      <Link href={`/blog/${slug.split(" ").join("-")}`}>
        <a className="">
          <Image
            src={"https:" + featuredImage.fields.file.url}
            width={500}
            height={300}
            lazyRoot={lazyRoot}
            className=" cursor-pointer  "
            alt="baby image"
          />
        </a>
      </Link>
      <div className="p-2 py-6">
        <Link href={`/blog/${slug.split(" ").join("-")}`}>
          <a className="w-full text-left p-2  text-pink-500 text-xl mb-4 cursor-pointer hover:underline">
            {title}
          </a>
        </Link>
        <p className="w-full text-sm p-2 px-2 text-left  ">
          <Link href={`/blog/${slug.split(" ").join("-")}`}>
            <a> {excerpt.slice(0, 100)}...</a>
          </Link>
          <Link href={`/blog/${slug.split(" ").join("-")}`}>
            <a className=" underline text-pink-600">Continue reading</a>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SinglePost;
