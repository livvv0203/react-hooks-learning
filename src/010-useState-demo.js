import { useEffect, useState } from 'react';

export default function App() {

    const [count, setCount] = useState(0);
    const [flag, setFlag] = useState(false);
    const [list, setList] = useState([]);
    const [text, setText] = useState("");
   
    
    useEffect(() => {
        document.title = 0;
    }, [count]);

    const test = () => {
        setCount(count + 1);
        setFlag(true);
        setList([111, 222, 333, 444]);
    }

    const AddText = () => {
        setList([...list, text]);
        setText("");
    }

    const HandleChange = (evt) => {
        setText(evt.target.value);
    }

    return (
        <div>
            <button onClick={test}>Click me</button>
            <div>
                count: {count}
                flag: {flag ? 1 : 0}
                list: {list.join(', ')}
            </div>
            <input onChange={HandleChange} placeholder='Input something' value={text} ></input>
            <button onClick={AddText}>Add</button>
            <ul>
                {
                    list.map((item) => <li key={item}>{item}</li>)
                }
            </ul>

        </div>
    );
}








