import React, { useState } from 'react';

// The React Component is just a function which returns jsx
function App() {
  // Built-in State Concept - Re-evaluate the component
  // That way to tell React to re-render 
  
  const [title, setTitle] = useState('Before Clicked.'); // returns an array

  const clickHandler = () => {
    console.log("Click for test..");
    setTitle('After Clicked.')
  };

  return (
    <div>
      <div>{title}</div>
      {/* just point at the function, but execute, as adding event listeners in vanilla JS */}
      <button onClick={clickHandler}>Test btn</button>
    </div>
  );
}

export default App; 
