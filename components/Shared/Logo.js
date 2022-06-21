import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <div className="flex flex-col justify-start items-start  p-2 px-6 cursor-pointer">
        <span className="text-pink-400 tracking-widest handWriting text-sm font-extrabold lg:text-2xl">
          Arabic Girl Names
        </span>
        <span className="popins text-gray-500 text-xs ">
          Arabic girl names for your princess and more...
        </span>
      </div>
    </Link>
  );
};

export default Logo;
