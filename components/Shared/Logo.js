import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <div className="flex flex-col justify-start items-start  p-2 cursor-pointer">
        <span className="text-pink-400 tracking-widest handWriting text-sm font-extrabold lg:text-2xl">
          Arabic female Names
        </span>
        <span className="popins text-gray-300 text-xs ">
          Arabic female names for your princess and more...
        </span>
      </div>
    </Link>
  );
};

export default Logo;
