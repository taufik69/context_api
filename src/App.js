import { createContext } from "react";
import Compc from "./Compc";
let Fname = createContext();
let last = createContext();
function App() {
  return (
    <>
      <Fname.Provider value={"taufik "}>
        <last.Provider value={"islam"}>
          <Compc />
        </last.Provider>
      </Fname.Provider>
    </>
  );
}

export default App;
export { Fname, last };
