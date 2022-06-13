import Hero from "../components/Home/Hero";
import CardAd from "../components/ads//CardAd";
import LatestPosts from "../components/Home/LatestPosts";
import Subscribe from "../components/Home/Subscribe";
import RandomNames from "../components/Home/RandomNames";
import { contentful } from "../utils/contentful/config";
import RandomName from "../models/RandomName";
import connection from "../database/DBConnect";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Head from "next/head";
import Script from "next/script";

const Home = ({ posts, randomNames }) => {
  const router = useRouter();
  const { sub } = router.query;
  const sectionHeadings =
    "w-full text-left   mt-8  tracking-widest text-3xl font-boldpopins  text-pink-500 font-extrabold";

  useEffect(() => {
    if (sub && sub === "1") {
      toast.success("Successfuly subscribed, Thank you!");
    }
  }, [router, sub]);
  return (
    <section className="w-full relative flex flex-col justify-start items-center">
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-WLZYHVJXJ9"
      />
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
        <title>Find An Arabic Girl Name Four Your Baby Girl</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="choose an arabic girl name four your baby girl. You can browse our full list of beautiful and cute girl names with their meanings."
        />
        <meta name="robots" content="index, follow" />
        <meta name="yandex-verification" content="ec1127e59313a78a" />

        <meta
          name="google-site-verification"
          content="Ch9-qg1xL6F6DTvV4WTOyFT5qDPMArEoUoOkJvhCJzs"
        />
      </Head>
      <Hero />

      <>
        <h3 className={sectionHeadings}>Today's Choice</h3>
        <RandomNames randomNames={randomNames} />
      </>

      <h3 className={sectionHeadings}>Latest Blog Posts</h3>

      <LatestPosts posts={posts} />
      <CardAd />

      <Subscribe />
    </section>
  );
};
Home.layout = "defaultLayout";
export default Home;

export async function getServerSideProps() {
  const { items } = await contentful.getEntries({
    content_type: "blog",
    limit: 3,
  });
  const defaultNames = [
    {
      _id: "61cf89527315e1586e0c037b",
      Name: "Assia",
      Meaning: "confort person or sad meditating",
    },
    {
      _id: "61ce357390bd324aca2226e1",
      Name: "Arij",
      Meaning: "Good fragrant scent.",
    },

    {
      _id: "61cf8b547315e1586e0c0387",
      Name: "Bacha'ir",
      Meaning: "means the beginnings",
    },
  ];
  await connection();
  let names = await RandomName.find();

  if (!names) {
    names = defaultNames;
  }

  return {
    props: {
      posts: items,
      randomNames: JSON.parse(JSON.stringify(names)),
    },
  };
}
