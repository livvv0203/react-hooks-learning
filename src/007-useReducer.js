import React, { useReducer } from 'react';

// passed by dispatch - old state and the action
const reducer = (prevState, action) => {

    let newState = {...prevState};

    switch(action.type) {
        case "jieqing-minus":
            newState.count--;

            return newState;
        
        case "jieqing-plus":
            newState.count++;

            return newState;
        
        default: 
            return prevState;
    }
}

const initialState = {
    count: 0,
}

export default function App() {
    // state and dispatch - function to change state
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <button onClick={() => {
                dispatch({
                    type: "jieqing-minus"
                })
            }}>-</button>
            {state.count}
            <button onClick={() => {
                dispatch({
                    type: "jieqing-plus"
                })
            }}>+</button>
        </div>
    );
}


























