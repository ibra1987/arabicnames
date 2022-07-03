import Link from "next/link";
import { Like } from "react-facebook";

const Alphabets = () => {
  const alphabets = [
    "A",
    "B",
    "C",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "Q",
    "R",
    "S",
    "T",
    "W",
    "Z",
  ];
  return (
    <div className="w-full p-4 mx-auto flex justify-center items-center my-6 bg-gray-700 shadow-md border">
      <div className="w-11/12 md:w-3/5 grid grid-cols-10 gap-2">
        {alphabets.map((letter, index) => (
          <div
            className="rounded-md w-6  h-6 md:w-10 md:h-10  flex justify-center items-center font-bold bg-pink-500 hover:bg-white hover:text-pink-500 hover:border hover:border-pink-500 transition-colors ease-out duration-300 cursor-pointer text-white"
            key={index}
          >
            <Link href={`/arabic-girl-names-starting-with/${letter}`}>
              <a>{letter}</a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Alphabets;
