import React from "react";
import getAll from "../../utils/contentful/getAll";
import getSingleBySlug from "../../utils/contentful/getSingleBySlug";
import Link from "next/link";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import moment from "moment";
import SideBar from "../../components/Shared/SideBar";
import Skeleton from "../../components/Shared/Skeleton";

const Slug = ({ post }) => {
  if (!post) return <Skeleton />;

  const { featuredImage, title, tags, body } = post?.fields;

  return (
    <section className="w-full  p-2 flex flex-col justify-start items-center md:flex-row md:justify-around  md:items-start bg-gray-100 lato ">
      <div className="bg-white rounded-md my-4 w-1/12">Shares</div>
      <div className="w-10/12 md:w-7/12 p-4 flex flex-col justify-start items-center my-4 bg-white border rounded-md ">
        <h1 className="text-5xl text-pink-500 py-4 font-extrabold ">{title}</h1>
        <Image
          src={"https:" + featuredImage.fields.file.url}
          width={featuredImage.fields.file.details.image.width}
          height={featuredImage.fields.file.details.image.height}
          className=" cursor-pointer rounded-md"
          alt="baby-girl-image"
        />
        <div className=" my-2 w-full grid grid-cols-3 gap-1 text-xs">
          <div className="">
            | <span className="text-pink-500 font-bold">Updated :</span>{" "}
            {moment(post.sys.updatedAt).format("DD-MM-YYYY")}
          </div>

          <div className=" ">
            | <span className="text-pink-500 font-bold"> Author :</span> Content
            team
          </div>
          <div className=" ">
            | <span className="text-pink-500 font-bold"> Image Source :</span>{" "}
            <a>
              {" "}
              <Link href="https://pixabay.com">pixabay.com</Link>
            </a>
          </div>
        </div>
        <div>
          {documentToReactComponents(body, {
            renderNode: {
              [BLOCKS.HEADING_2]: (node, children) => {
                return (
                  <h2 className="text-pink-500 font-bold  my-4 text-xl">
                    {children}
                  </h2>
                );
              },
              [BLOCKS.PARAGRAPH]: (node, children) => {
                return (
                  <p
                    data-id={body.content.indexOf(node)}
                    className="indent-2 leading-10  my-4 text-lg text-gray-600"
                  >
                    {children}
                  </p>
                );
              },
              /*[INLINES.HYPERLINK]:(node, children)=>{

                return (
                    <Link>
                    <a>

                    </a>
                    </Link>
                )
              }*/
            },
          })}{" "}
        </div>
        <hr className="w-full text-gray-200 h-0.5 bg-gray-200 " />

        <div className="w-full flex justify-start items-center my-6">
          <span className="text-pink-500 ">Tags: </span>
          <div className="grid grid-flow-col gap-1">
            {tags.split(", ").map((tag, index) => {
              return (
                <span
                  key={index}
                  className="px-2 mx-2 py-1 bg-gray-200 rounded-2xl text-xs text-gray-600"
                >
                  #{tag}
                </span>
              );
            })}
          </div>
        </div>
      </div>
      <SideBar />
    </section>
  );
};
Slug.layout = "defaultLayout";
export default Slug;

export async function getStaticPaths() {
  const response = await getAll("blog");

  const paths = response.items.map((item) => {
    return { params: { slug: item.fields.slug } };
  });

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const slug = params.slug.split("-").join(" ");
  try {
    const response = await getSingleBySlug(slug, "blog");

    return {
      props: {
        post: response.items[0],
        revalidate: 10,
      },
    };
  } catch (err) {
    return {
      props: {
        error: err.message,
      },
    };
  }
}
