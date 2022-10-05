import { useState, useEffect } from 'react';

function Test() {
    useEffect(() => {
        let timer = setInterval(() => {
            console.log("Executing...");
        }, 1000);
        
        return () => {
            clearInterval(timer);
        }

    }, []);

    return (
        <div>This is Test.</div>
    );
}

export default function App() {

    const [flag, setFlag] = useState(true);

    return(
        <div>
            {flag ? <Test></Test> : null}
            <button onClick={() => setFlag(!flag)}>Switch</button>
        </div>
    );
}











