import { useState, useEffect } from "react";

let UseWidthMachine = (pera) => {
  const [widthSize, setwidthSize] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth < pera) {
        setwidthSize(true);
      } else {
        setwidthSize(false);
      }
    });
  }, [pera]);

  return widthSize;
};

export default UseWidthMachine;
