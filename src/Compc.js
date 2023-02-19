import React, { useContext } from "react";
import { Fname, last } from "./App";
const Compc = () => {
  const name = useContext(Fname);
  const lastname = useContext(last);
  return (
    <>
      <h1>{name}</h1>
      <h1>{lastname}</h1>
    </>
  );
};

export default Compc;
