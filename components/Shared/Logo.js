import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <div className="flex flex-col justify-start items-start cursor-pointer">
        <h1 className="text-pink-400 tracking-widest handWriting font-extrabold text-2xl">
          Arabic female Names
        </h1>
        <span className="popins text-gray-300 text-xs ">
          Arabic female names for your princess and more...
        </span>
      </div>
    </Link>
  );
};

export default Logo;
