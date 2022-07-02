import Image from "next/image";
import { useRef } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Link from "next/link";

const SinglePost = ({ post }) => {
  const { featuredImage, title, excerpt, slug } = post.fields;
  const lazyRoot = useRef(null);

  return (
    <div
      className="p-1 border rounded-sm cursor-pointer scale bg-gray-50 mb-6  shadow-lg hover:bg-gray-700 text-gray-700 hover:text-gray-100 transition-colors ease-in-out duration-150  flex flex-col justify-start items-center   "
      ref={lazyRoot}
    >
      <Link href={`/blog/${slug.split(" ").join("-")}`}>
        <a className="">
          <Image
            src={"https:" + featuredImage.fields.file.url}
            width={featuredImage.fields.file.details.image.width}
            height={featuredImage.fields.file.details.image.height}
            lazyRoot={lazyRoot}
            className=" cursor-pointer"
            alt="baby image"
          />
        </a>
      </Link>
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
  );
};

export default SinglePost;
