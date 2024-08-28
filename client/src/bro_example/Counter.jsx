import React, {useState} from 'react';

function Counter() {
    const[count, setCount] = useState(0);

    const increment = () => {
        // setCount(count + 1); not a updater function
        setCount(c => c + 1); // updater function
        setCount(c => c + 1);
        setCount(c => c + 1);
    }
    const decrement = () => {
        setCount(c => c - 1);
        setCount(c => c - 1);
        setCount(c => c - 1);
    }
    const reset = () => {
        setCount(0);
    }

    return(
        <>
            <h1>{count}</h1>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
            <button onClick={reset}>reset</button>
        </>
    );
}

export default Counter