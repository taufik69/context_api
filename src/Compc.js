const Compc = ({ handleClick }) => {
  console.log("this is component c");
  return (
    <>
      <h1>this is componet c</h1>
      <button type="button" onClick={handleClick}>
        click me
      </button>
    </>
  );
};

export default Compc;
