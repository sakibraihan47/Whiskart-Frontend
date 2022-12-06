import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div>{count}</div>
      <div onClick={() => setCount(count + 1)}>Add Item</div>
      <div
        onClick={() => {
          if (count == 0) {
            setCount(0);
          } else {
            setCount(count - 1);
          }
        }}
      >
        Remove
      </div>
    </>
  );
};

export default Counter;
