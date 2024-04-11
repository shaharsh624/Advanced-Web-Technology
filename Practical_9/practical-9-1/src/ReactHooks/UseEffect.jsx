import { useEffect, useState } from "react";
import "../App.css";

function UseEffect() {
    const [count, setCount] = useState(0);
    const [numberProperty, setNumberProperty] = useState("");

    useEffect(() => {
        if (count % 2 === 0) {
            setNumberProperty(`Even Number: ${count}`);
        } else {
            setNumberProperty(`Odd Number: ${count}`);
        }
        console.log("useEffect changed");
    }, [count]);

    return (
        <>
            <div className="card">
                <h1>useEffect</h1>
                <button onClick={() => setCount((count) => count + 1)}>
                    Click Me!
                </button>
                <p>{numberProperty}</p>
            </div>
        </>
    );
}

export default UseEffect;
