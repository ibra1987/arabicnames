import { useState, createContext } from "react";

export const RandomNamesContext = createContext();

export const RandomNamesProvider = (props) => {
  const [randomNames, setRandomNames] = useState([]);

  return (
    <RandomNamesContext.Provider value={(randomNames, setRandomNames)}>
      {props.children}
    </RandomNamesContext.Provider>
  );
};
