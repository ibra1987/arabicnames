import Image from "next/image";
import { useRef } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Link from "next/link";

const SinglePost = ({ post }) => {
  const { featuredImage, title, excerpt, slug } = post.fields;
  const lazyRoot = useRef(null);

  return (
    <div
      className="p-1   cursor-pointer scale bg-white  shadow-lg  text-gray-700  transition-colors ease-in-out duration-150  flex flex-col md:flex-row jusdtify-center md:justify-start items-center md:items-start  "
      ref={lazyRoot}
    >
      <Link href={`/blog/${slug.split(" ").join("-")}`}>
        <a className="">
          <Image
            src={"https:" + featuredImage.fields.file.url}
            width={300}
            height={200}
            lazyRoot={lazyRoot}
            className=" cursor-pointer my-2  "
            alt="baby image"
          />
        </a>
      </Link>

      <p className="w-full text-sm  px-2 text-left  ">
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
