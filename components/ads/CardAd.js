import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
const CardAd = () => {
  const lazyRoot = useRef(null);
  return (
    <div
      className="p-2  shadow-md flex flex-col justify-start items-center  rounded-md border "
      ref={lazyRoot}
    >
      <Link href="https://ae2c87objsiz9t2re1w9ndpvr2.hop.clickbank.net/?tid=agn">
        <a>
          <Image
            src={"/images/ads/childrenreading2.jpg"}
            width={600}
            height={314}
            lazyRoot={lazyRoot}
            className="scale cursor-pointer rounded-md"
            alt="children reading"
          />
        </a>
      </Link>
    </div>
  );
};

export default CardAd;
