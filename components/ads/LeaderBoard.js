import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
const LeaderBoard = () => {
  const [location, setLocation] = useState("");
  const [random, setRandom] = useState(Math.round(Math.random()));
  const lazyRoot = useRef(null);
  const Ads = [
    {
      img: "/images/ads/baby-free-stuf.gif",
      link: "https://afflat3e1.com/lnk.asp?o=12229&c=918277&a=236088&k=FF1069C66B6CE4C44B43CA2261B42464&l=12508&s1=agnsidebar",
    },

    {
      img: "/images/ads/baby-sleep.gif",
      link: " https://863f7foglzk3eve2gj0bs0tz9u.hop.clickbank.net/?tid=AGN",
    },
    {
      img: "/images/ads/family-safety-privacy.gif",
      link: "https://afflat3c1.com/lnk.asp?o=21836&c=157304&a=236088&k=DCF525862457FBDA356F27E1BE399D52&l=22963",
    },
  ];

  useEffect(() => {
    const arr = [0, 1, 2];
    console.log(Math.floor(Math.random()) * arr.length);
    getLocation();
  });

  const getLocation = async () => {
    try {
      const res = await axios.get("https://geolocation-db.com/json/");

      if (res.data.IPv4) {
        const response = await axios.get(
          `http://api.ipapi.com/${res.data.IPv4}?access_key=${process.env.NEXT_PUBLIC_IPAPI_KEY}`
        );
        setLocation(response.data.country_code);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="p-1 w-11/12 my-4 border rounded flex justify-center items-center">
      {location !== "US" ? (
        <Link href={Ads[2].link}>
          <Image
            src={Ads[2].img}
            width={728}
            height={90}
            className="cursor-pointer p-1"
            alt="Baby-free-stuff"
            lazyRoot={lazyRoot}
          />
        </Link>
      ) : (
        <Link href={Ads[random].link}>
          <Image
            src={Ads[random].img}
            width={728}
            height={90}
            className="cursor-pointer"
            alt="Baby-free-stuff"
            lazyRoot={lazyRoot}
          />
        </Link>
      )}
    </div>
  );
};

export default LeaderBoard;
