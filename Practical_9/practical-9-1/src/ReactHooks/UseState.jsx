import { useState } from "react";
import "../App.css";

function UseState() {
    const [count, setCount] = useState(0);

    return (
        <>
            <div className="card">
                <h1>useState</h1>
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
            </div>
        </>
    );
}

export default UseState;
