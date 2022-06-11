import React from "react";

const RandomName = ({ name }) => {
  return (
    <div className="border p-4 flex flex-col justify-around items-start shadow-md rounded-md popins">
      <div className="flex justify-start w-full items-start">
        <h2 className="mx-2 text-gray-700 font-bold text-sm tracking-wider">
          Name:
        </h2>
        <span className="text-pink-500">{name?.Name}</span>
      </div>
      <div className="flex justify-start w-full items-start mb-4">
        <h2 className="mx-2 text-gray-700 font-bold tracking-wider text-sm">
          Meaning:
        </h2>
        <span className="text-pink-500">{name?.Meaning}</span>
      </div>
      <div className="flex justify-start w-full items-start">
        <h2 className="mx-2 text-gray-700 font-bold text-sm tracking-wider  ">
          Pronunciation:
        </h2>
        <audio
          controls
          className="w-2/4 h-4"
          src={`/audio/femaleNames/${name.Name}.mp3`}
        >
          Your browser does not support the
          <code>audio</code> element.
        </audio>
      </div>
    </div>
  );
};

export default RandomName;
