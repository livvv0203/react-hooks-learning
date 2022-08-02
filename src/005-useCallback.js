import React, { useState } from "react";

export default function App() {

  const [count, setCount] = useState(0); // Will keep the state

  var testCount = 0; // Will be reset on window reload

  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
          testCount++;
        }}
      >Click</button>
      { count } - { testCount }
    </div>
  );
}









