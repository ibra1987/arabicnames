import Image from "next/image";
import { useRef } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Link from "next/link";

const SinglePost = ({ post }) => {
  const { featuredImage, title, excerpt, slug } = post.fields;
  const lazyRoot = useRef(null);

  return (
    <div
      className="p-2 bg-gray-50  shadow-md flex flex-col justify-start items-center  rounded-md border "
      ref={lazyRoot}
    >
      <Link href={`/blog/${slug.split(" ").join("-")}`}>
        <a className="block h-1/2">
          <Image
            src={"https:" + featuredImage.fields.file.url}
            width={featuredImage.fields.file.details.image.width}
            height={featuredImage.fields.file.details.image.height}
            lazyRoot={lazyRoot}
            className="scale cursor-pointer rounded-md"
            alt="baby image"
          />
        </a>
      </Link>
      <Link href={`/blog/${slug.split(" ").join("-")}`}>
        <a className="w-full text-left  text-pink-500 text-xl my-4 cursor-pointer hover:underline">
          {title}
        </a>
      </Link>
      <p className="w-full text-sm p-2 text-left text-gray-700 ">
        {excerpt.slice(0, 100)}...
        <Link href={`/blog/${slug.split(" ").join("-")}`}>
          <a className=" underline text-pink-600">Continue reading</a>
        </Link>
      </p>
    </div>
  );
};

export default SinglePost;
