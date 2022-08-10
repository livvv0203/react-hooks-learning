import React, { useState } from 'react';
import './Test.css';

export default function App() {

    let input = "     React DEV       ";
    // let output = "<div>" + input.trim() + "</div>";
    // console.log(input);
    // console.log(input.trim());
    // console.log(output);

    // Reusable Functions
    const trim = str => str.trim();
    const wrapInDiv = str => `<div>${str}</div>`; 
    // JSON.stringfy(), JSON.parse()
    const list = [
        {
            itemName: 'Apple',
            itemCount: 2,
            itemColor: 'red'
        },
        {
            itemName: 'Apple',
            itemCount: 3,
            itemColor: 'green'
        },
        
        {
            itemName: 'Apple',
            itemCount: 5,
            itemColor: 'blue'
        },
    ];

    // const [list, setList] = useState([]);

    const toLowerCase = str => str.toLowerCase();
    const result = wrapInDiv(toLowerCase(trim(input)));
    console.log(input);
    console.log(result);

    return (
        <div>
            <table>
                <tr>
                    <th>Item Name</th>
                    <th>Item Count</th>
                    <th>Item Color</th>
                </tr>
                {
                    list.map((item,index) => 
                    <tr key={index}>
                        <td>{item.itemName}</td>
                        <td>{item.itemCount}</td>
                        <td>{item.itemColor}</td>
                    </tr>
                    )
                }
            </table>
        </div>
    );
}










