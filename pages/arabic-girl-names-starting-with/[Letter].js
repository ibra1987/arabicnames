import { useRouter } from "next/router";
import { FiHeart } from "react-icons/fi";

import { useState } from "react";
import SearchInput from "../../components/Home/SearchInput";
import Skeleton from "../../components/Shared/Skeleton";
import connection from "../../database/DBConnect";
import Name from "../../models/Name";
import Head from "next/head";
import LeaderBoard from "../../components/ads/LeaderBoard";
import Link from "next/link";

const FullNamesList = ({ names, letter }) => {
  const router = useRouter();
  const [filter, setfilter] = useState("");
  const [namesList, setNamesList] = useState(names);
  if (router.isFallback) return <div>Loading ....</div>;
  if (!names) router.push("/arabic-girls-names-with-meaning");

  const inputStyle =
    "w-3/5 border-2 border-pink-200 outline-none bg-white focus:border-pink-400 p-2 text-gray-700";
  const displayedNames = !filter
    ? namesList
    : namesList
        .filter((name) =>
          name["Name"].toLowerCase().includes(filter.toLowerCase())
        )
        .sort((a, b) => a["Name"] - b["Name"]);
  const handleOnChange = (e) => {
    setfilter(e.target.value);
  };

  return (
    <section className="w-full md:w-11/12 flex flex-col justify-start items-center p-2 mt-10 ">
      <Head>
        <title>{`Arabic girl names starting with letter ${letter?.toUpperCase()}`}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content={`A list of unique arabic girl names starting with letter ${letter?.toUpperCase()}`}
        />
        <meta name="robots" content="index, follow" />
      </Head>
      <div className="w-full text-center">
        <SearchInput
          placeholder={"Quick Search"}
          style={inputStyle}
          value={filter}
          changeHandler={handleOnChange}
        />
      </div>
      <div className="w-full my-8 flex flex-col justify-start items-center text-sm md:text-lg">
        {!displayedNames && (
          <div className="w-full  text-red-600 p-4 text-center">No results</div>
        )}
        {letter && (
          <h1 className="text-2xl p-4 mb-6 lato font-extrabold tracking-widest bg-gray-100 w-full  text-gray-600 text-center">{`Arabic girl names starting with the letter ${letter?.toUpperCase()}`}</h1>
        )}
        {displayedNames &&
          displayedNames.map((name, index) => (
            <>
              <div className="w-full md:4/5 text-center" key={name._id}>
                <div className="w-full bg-gray-50 border-b flex justify-start items-start p-2">
                  <div className="w-1/4 flex justify-start items-center">
                    <FiHeart className="mr-2 text-pink-400" />
                    <h2> {name.Name}</h2>
                  </div>
                  <span className="w-1/3 md:w-2/4 text-left">
                    {name.Meaning}
                  </span>
                  <audio
                    controls
                    className="w-2/4 md:w-1/5 h-4"
                    src={`/audio/femaleNames/${name.Name}.mp3`}
                  >
                    Your browser does not support the
                    <code>audio</code> element.
                  </audio>
                </div>
              </div>
            </>
          ))}
      </div>
      {letter && (
        <div className="w-11/12 p-4 my-6 ">
          <p className="indent-6 text-gray-900 w-4/5">
            A full list of arabic girl names along with their meanings, and how
            to pronounce them. Every day, fresh names are added to the list,
            which is constantly updated. Please do not hesitate to{" "}
            <Link href="/contact">
              <a className="text-pink-500 underline">contact us</a>
            </Link>{" "}
            if you require more or personalized recommendations.It's free.
          </p>
        </div>
      )}
    </section>
  );
};

FullNamesList.layout = "defaultLayout";
export default FullNamesList;

export async function getStaticPaths() {
  await connection();
  const response = await Name.find();
  const names = JSON.parse(JSON.stringify(response));

  const letters = names.map((name) => {
    return name["Name"].charAt(0).toLocaleLowerCase();
  });
  const uniqueLetters = [...new Set(letters)];

  const paths = uniqueLetters.map((l) => {
    return { params: { Letter: l } };
  });

  return {
    paths,
    fallback: true,
  };
}
export async function getStaticProps({ params }) {
  const letter = params.Letter;
  await connection();

  const names = await Name.find({
    Name: { $regex: "^" + letter, $options: "i" },
  });
  if (!names) {
    return {
      props: {
        names: [],
        letter,
      },
    };
  }

  return {
    props: {
      names: JSON.parse(JSON.stringify(names)),
      letter,
      revalidate: 10,
    },
  };
}
