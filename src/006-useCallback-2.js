import React, { useCallback, useState } from "react";

export default function App() {
  const [text, setText] = useState("");
  const [list, setList] = useState(["aa", "bb", "cc"]);

  const handleChange = useCallback((evt) => {
    setText(evt.target.value);
  }, []);

  const handleAdd = useCallback(() => {
    // console.log(text);
    setList([...list, text]); // Add text value to the list
    setText("");
  }, [text, list]);

  const handleDel = useCallback(
    (index) => {
      var newList = [...list];
      newList.splice(index, 1); // Delete one at index
      setList(newList);
    },
    [list]
  );

  return (
    <div>
      <input onChange={handleChange} value={text}></input>
      <button onClick={handleAdd}>Add</button>

      <ul>
        {list.map((item, index) => (
          <li key={item}>
            {item}
            <button onClick={() => handleDel(index)}>del</button>
          </li>
        ))}
      </ul>
      {!list.length && <div>Empty List</div>}
    </div>
  );
}












