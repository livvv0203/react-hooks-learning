import React, { useEffect, useState } from "react";

export default function App() {
  const [name, setName] = useState("jieqing");

  useEffect(() => {
    setName(name.substring(0, 1).toUpperCase() + name.substring(1));
  }, [name]); // execute once, then execute everytime when name changes

  return (
    <div>
      app - {name}
      <button onClick={() => setName("Someone")}>click</button>
    </div>
  );
}






