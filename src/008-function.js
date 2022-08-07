import React from 'react';

export default function App() {

    let input = "     React DEV       ";
    // let output = "<div>" + input.trim() + "</div>";
    // console.log(input);
    // console.log(input.trim());
    // console.log(output);

    // Reusable Functions
    const trim = str => str.trim();
    const wrapInDiv = str => `<div>${str}</div>`; 

    const toLowerCase = str => str.toLowerCase();
    const result = wrapInDiv(toLowerCase(trim(input)));
    console.log(input);
    console.log(result);

    return (
        <div>
            Test
        </div>
    );

}




