import { useState } from "react";
import SearchInput from "../components/Home/SearchInput";
import connection from "../database/DBConnect";
import Name from "../models/Name";

const FullNamesList = ({ names }) => {
  const [filter, setfilter] = useState("");
  const [namesList, setNamesList] = useState(JSON.parse(names));
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
        .sort((a, b) => {
          if (a.Name.toLowerCase() < b.Name.toLowerCase()) {
            return -1;
          }
          if (a.Name.toLowerCase() > b.Name.toLowerCase()) {
            return 1;
          }
          return 0;
        })
        .filter((name) =>
          name["Name"].toLowerCase().includes(filter.toLowerCase())
        );

  const handleOnChange = (e) => {
    setfilter(e.target.value);
  };

  return (
    <section className="w-full md:w-11/12 flex flex-col justify-start items-center p-2 mt-10 ">
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
                <h2 className=" w-1/4">{name.Name}</h2>
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
                <div className="w-4/5 mx-auto  bg-pink-100 h-48 my-10">add</div>
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
