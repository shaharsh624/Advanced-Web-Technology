import { useState, useCallback } from "react";

var funccount = new Set();
const UseCallback = () => {
    const [count, setCount] = useState(0);
    const [number, setNumber] = useState(0);

    const incrementCounter = useCallback(() => {
        setCount(count + 1);
    }, [count]);
    const decrementCounter = useCallback(() => {
        setCount(count - 1);
    }, [count]);
    const incrementNumber = useCallback(() => {
        setNumber(number + 1);
    }, [number]);

    funccount.add(incrementCounter);
    funccount.add(decrementCounter);
    funccount.add(incrementNumber);
    return (
        <div className="card">
            <h1>useCallback</h1>
            <p>Count: {count}</p>
            <p>Function Count: {funccount.size}</p>
            <button onClick={incrementCounter}>Increase counter</button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={decrementCounter}>Decrease Counter</button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={incrementNumber}>Increase number</button>
        </div>
    );
};

export default UseCallback;
