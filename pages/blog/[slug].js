import { useRef } from "react";
import getAll from "../../utils/contentful/getAll";
import getSingleBySlug from "../../utils/contentful/getSingleBySlug";
import Link from "next/link";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import moment from "moment";
import SideBar from "../../components/Shared/SideBar";
import Engagement from "../../components/blog/Engagement";
import Skeleton from "../../components/Shared/Skeleton";
import { useRouter } from "next/router";
import getRandom from "../../utils/helpers/getRandom";
import Head from "next/head";
import DisqusComments from "../api/blog/comments/DisqusComments";
import LeaderBoard from "../../components/ads/LeaderBoard";

const Slug = ({ post, suggestedPosts }) => {
  const lazyRoot = useRef(null);
  const router = useRouter();
  if (!post) return <Skeleton />;
  if (router.isFallback) return <div>Loading ....</div>;

  const { featuredImage, title, tags, body } = post?.fields;

  return (
    <>
      <Head>
        <title>{post.fields.slug}</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={post.fields.excerpt} />
        <meta
          name="keywords"
          content={"baby girl," + post.fields.slug.split("-").join(",")}
        />
        <meta name="robots" content="index, follow" />
      </Head>
      <section className="w-full my-4 text-gray-600  p-2 flex flex-col justify-start items-center md:flex-row md:justify-around  md:items-start  lato ">
        <div className="border sticks mt-40 shadow-md rounded-md  w-11/12 md:w-1/12">
          <Engagement slug={post.fields.slug} />
        </div>
        <div className="  w-11/12 md:w-7/12 p-4 flex flex-col  shadow-md  justify-start items-center my-4 bg-white border rounded-md ">
          <h1 className="text-2xl md:text-3xl  lg:text-4xl text-pink-500 py-4 font-extrabold ">
            {title}
          </h1>
          <Image
            src={"https:" + featuredImage.fields.file.url}
            width={featuredImage.fields.file.details.image.width}
            height={featuredImage.fields.file.details.image.height}
            className=" cursor-pointer rounded-md"
            alt="baby-girl-image"
            lazyRoot={lazyRoot}
          />
          <div className=" my-2 w-full grid grid-cols-3 gap-1 text-xs">
            <div className="">
              | <span className="text-pink-500 font-bold">Updated :</span>{" "}
              {moment(post.sys.updatedAt).format("DD-MM-YYYY")}
            </div>

            <div className=" ">
              | <span className="text-pink-500 font-bold"> Author :</span>{" "}
              Content team
            </div>
            {/* <div className=" ">
            | <span className="text-pink-500 font-bold"> Image Source :</span>{" "}
            <Link href="https://pixabay.com">
              <a>pixabay.com</a>
            </Link>
          </div> */}
          </div>
          <div>
            {documentToReactComponents(body, {
              renderNode: {
                [BLOCKS.HEADING_2]: (node, children) => {
                  return (
                    <h2 className="text-pink-500 font-bold tracking-wider my-4 text-2xl roboto">
                      {children}
                    </h2>
                  );
                },
                [BLOCKS.HEADING_3]: (node, children) => {
                  return (
                    <h6 className="bg-gray-200 p-4 my-1 rounded w-full text-gray-500 roboto">
                      {children}
                      <br />
                    </h6>
                  );
                },

                [BLOCKS.PARAGRAPH]: (node, children) => {
                  return (
                    <>
                      <p
                        data-id={body.content.indexOf(node)}
                        className="indent-2 leading-8 popins  my-4 text-sm md:text-md lg:text-lg"
                      >
                        {children}
                      </p>
                      {post.fields.slug ===
                        "Newborn Baby Girl Gift Set Ideas" &&
                        body.content.indexOf(node) === 5 && <LeaderBoard />}
                    </>
                  );
                },

                [INLINES.HYPERLINK]: (node, children) => {
                  return (
                    <Link href={node.data.uri}>
                      <a className="text-blue-500" rel="nofollow">
                        {children}
                      </a>
                    </Link>
                  );
                },
                [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
                  return (
                    <Image
                      src={"https:" + node.data.target.fields.file.url}
                      width={node.data.target.fields.file.details.image.width}
                      height={node.data.target.fields.file.details.image.height}
                      lazyRoot={lazyRoot}
                    />
                  );
                },
                [BLOCKS.LIST_ITEM]: (node, children) => {
                  return (
                    <li className="italic mx-2 text-gray-500 my-2 roboto">
                      {children}
                    </li>
                  );
                },
              },
            })}
          </div>

          <hr className="w-full text-gray-200 h-0.5 bg-gray-200 " />
          <div className="w-full flex justify-start items-center my-6">
            <span className="text-pink-500 ">Tags: </span>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
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
          <div className="w-full my-4 bg-yellow-500 flex justify-center items-center">
            <Link href="https://afflat3e1.com/lnk.asp?o=12229&c=918277&a=236088&k=FF1069C66B6CE4C44B43CA2261B42464&l=12508&s1=agnsidebar">
              <Image
                src={"/images/ads/baby-free-stuf.gif"}
                width={728}
                height={90}
                className="cursor-pointer"
                alt="Baby-free-stuff"
                lazyRoot={lazyRoot}
              />
            </Link>
          </div>
          <hr className="w-full text-gray-200 h-0.5 bg-gray-200 " />
          <LeaderBoard />

          <DisqusComments post={post} />
        </div>
        <div className="sticks h-screen w-11/12 md:w-3/12">
          <SideBar suggestedPosts={suggestedPosts} />
        </div>
      </section>
    </>
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
    const suggestions = await getAll("blog");
    const items = getRandom(suggestions.items, 2);

    return {
      props: {
        post: response.items[0],
        suggestedPosts: items,
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
