import { useEffect, useRef, useState } from "react";
import "../App.css";

function UseRef() {
    const [count, setCount] = useState(0);
    const renderCount = useRef(0);

    useEffect(() => {
        renderCount.current = renderCount.current + 1;
    }, [count]);

    return (
        <>
            <div className="card">
                <h1>useRef</h1>
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>{renderCount.current}</p>
            </div>
        </>
    );
}

export default UseRef;
