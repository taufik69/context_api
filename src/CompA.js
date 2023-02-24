import React from "react";
import UseWidthMachine from "./CustomHooks/UseWidth";

const CompA = () => {
  const result = UseWidthMachine(700);
  console.log("sending result is :", result);
  return (
    <>
      <h1>{result ? "that is taufik " : "You will be a billoniare"}</h1>
    </>
  );
};

export default CompA;
