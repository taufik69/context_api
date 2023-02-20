import React, { useState } from "react";
import Compc from "./Compc";
const CompA = () => {
  console.log("this is component B");
  const [show, setshow] = useState(true);
  return (
    <div>
      {show ? <h1>This is component a </h1> : null}
      <Compc handleClick={() => setshow(!show)} />
    </div>
  );
};

export default CompA;
