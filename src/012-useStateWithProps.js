import { useEffect, useState } from "react";

function Counter(props) {
  const [count, setCount] = useState(() => {
    return props.count;
  });

  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}

export default function App() {
  return (
    <div>
      <Counter count={10}></Counter>
      <Counter count={20}></Counter>
      <Counter count={30}></Counter>
    </div>
  );
}









