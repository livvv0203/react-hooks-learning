import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './Test.css';

export default function App() {

    const [list, setList] = useState([]);

    // Only execute once
    useEffect(() => {
        axios.get("https://imdb-api.com/en/API/Top250Movies/k_rxpp9e9o").then(res => {
            console.log(res.data.items);
            setList(res.data.items);
        }).catch((err) => {
            console.log(err);
        });
    }, []);

    return (
        <div className='movie-list'>
            {
                list.map(item => <li className='list-content' key={item.id}>{item.title}</li>)
            }
        </div>
    );
}
















