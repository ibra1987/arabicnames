import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const NotFound = () => {
  const router = useRouter();
  const [timer, setTimer] = useState(5);
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(timer - 1);
    }, 1000);

    setTimeout(() => {
      router.push("/");
    }, 5000);

    return () => {
      clearTimeout();
      clearInterval(interval);
    };
  });
  return (
    <section className="w-full flex flex-col justify-center text-lg items-center py-8 popins">
      <h2 className="text-gray-700 tracking-wider ">
        Oops! We could not find the requested page :(
      </h2>
      <div>
        We {"couldn't"} find the requested page. Redirecting to&nbsp;
        <Link href="/">
          <a className="text-pink-500 ">Homepage...{timer}</a>
        </Link>
      </div>
    </section>
  );
};

NotFound.layout = "defaultLayout";
export default NotFound;
