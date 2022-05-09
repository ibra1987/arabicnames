import { useRouter } from "next/router";
import { useEffect } from "react";
import SideBar from "./SideBar";

const Skeleton = ({ redirect }) => {
  const router = useRouter();
  useEffect(() => {
    if (redirect) {
      setTimeout(() => {
        router.push("/arabic-girls-names-with-meaning");
      }, 3000);
    }

    return () => clearTimeout();
  }, [redirect, router]);
  return (
    <section className="w-full  p-2 flex flex-col justify-start items-center md:flex-row md:justify-around  md:items-start bg-gray-100 lato ">
      <div className="bg-white border rounded h-screen py-4  my-4 w-1/12 flex flex-col justify-start items-center">
        <div className="w-11/12 bg-zinc-200 my-4">shares</div>
      </div>

      <div className="w-10/12 md:w-7/12 p-4 flex flex-col justify-start items-center my-4 bg-white border rounded-md ">
        <h1 className="w-full bg-zinc-200 h-10 my-4 "></h1>
        <div className="w-full h-56 bg-zinc-200"></div>
        <div className=" my-2 w-full h-10 bg-zinc-200"></div>
        <div className="w-full bg-zinc-200 h-96"></div>
        <hr className="w-full t bg-zinc-200 h-0.5 " />

        <div className="w-full flex justify-start items-center my-6">
          <span className="text-pink-100 ">Tags: </span>
          <div className="w-full h-32 bg-zinc-200"></div>
        </div>
      </div>
      <SideBar />
    </section>
  );
};

export default Skeleton;
