import React, { useState } from 'react';

export default function App() {

    // const [state, setState] = useState(initialState);
    const [name, setName] = useState("Jieqing"); 
    const [age, setAge] = useState(100);

    return (    
        <div>
            <button onClick={() => {
                setName("Liu");
                setAge(21);
            }}>
                click to setName
            </button>
            app - {name} - {age}
        </div>
    )

}










