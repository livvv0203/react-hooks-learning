import { useEffect } from "react";

/**
 * useEffect
 * 1. Without dependency, init + re-render
 * 2. With [], init and execute 1 time
 * 3. With dependencies as [count, name], init + change on dependency
 */

export default function App() {
  useEffect(() => {
    // Send request
    function loadData() {
      // Refer to Fetch MDN
      fetch("https://imdb-api.com/en/API/Top250Movies/k_rxpp9e9o")
        .then((res) => res.json())
        .then((data) => console.log(data));
    }

    loadData();
  }, []);

  return <div>123</div>;
}
