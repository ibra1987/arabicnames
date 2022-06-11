import { useState, useEffect } from "react";
import SearchInput from "../components/Home/SearchInput";
import connection from "../database/DBConnect";
import Name from "../models/Name";
import { useRouter } from "next/router";
import { FiHeart } from "react-icons/fi";
import Head from "next/head";
const FullNamesList = ({ names }) => {
  const [filter, setfilter] = useState("");
  const [namesList, setNamesList] = useState(JSON.parse(names));
  const router = useRouter();
  const { search } = router.query;

  useEffect(() => {
    if (search) {
      setfilter(search);
    }
  }, [router, search]);

  const inputStyle =
    "w-3/5 border-2 border-pink-200 outline-none bg-white focus:border-pink-400 p-2 text-gray-700";
  const displayedNames = !filter
    ? namesList.sort((a, b) => {
        if (a.Name.toLowerCase() < b.Name.toLowerCase()) {
          return -1;
        }
        if (a.Name.toLowerCase() > b.Name.toLowerCase()) {
          return 1;
        }
        return 0;
      })
    : namesList
        .filter(
          (name) =>
            name.Name.toLowerCase().includes(filter.toLowerCase()) ||
            name.Meaning.includes(filter.toLowerCase())
        )
        .sort((a, b) => {
          if (a.Name.toLowerCase() < b.Name.toLowerCase()) {
            return -1;
          }
          if (a.Name.toLowerCase() > b.Name.toLowerCase()) {
            return 1;
          }
          return 0;
        });
  const handleOnChange = (e) => {
    setfilter(e.target.value);
  };

  if (router.isFallback) return <div>Loading ...</div>;
  return (
    <section className="w-full md:w-11/12 flex flex-col justify-start items-center p-2 mt-10 ">
      <Head>
        <title>Arabic girl names with meaning</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Full list of arabic girls names with their meaning"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
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
        {!displayedNames.length && (
          <div className="w-full  text-red-600 p-4 text-center">No results</div>
        )}
        {displayedNames &&
          displayedNames.map((name, index) => (
            <div className="w-full md:4/5 text-center" key={name._id}>
              <div className="w-full bg-gray-50 border-b flex justify-start items-start p-2">
                <div className="w-1/4 flex justify-start items-center">
                  <FiHeart className="mr-2 text-pink-400" />
                  <h2> {name.Name}</h2>
                </div>
                <span className="w-1/3 md:w-2/4 text-left">{name.Meaning}</span>
                <audio
                  controls
                  className="w-2/4 md:w-1/5 h-8"
                  src={`/audio/femaleNames/${name.Name}.mp3`}
                >
                  Your browser does not support the
                  <code>audio</code> element.
                </audio>
              </div>
              {index % 10 === 0 && index !== 0 && (
                <div className="w-4/5 mx-auto hidden my-10"></div>
              )}
            </div>
          ))}
      </div>
    </section>
  );
};

FullNamesList.layout = "defaultLayout";
export default FullNamesList;

export async function getStaticProps() {
  await connection();

  const names = await Name.find();
  return {
    props: {
      names: JSON.stringify(names),
    },
    revalidate: 60 * 60,
  };
}
