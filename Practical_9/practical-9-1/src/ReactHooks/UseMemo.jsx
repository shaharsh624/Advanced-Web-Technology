import { useState, useMemo } from "react";
import "../App.css";

// Without Memo the square result is calculated very slowly

function UseMemo() {
    const [count, setCount] = useState(0);
    const [darkTheme, setDarkTheme] = useState(false);
    const squareResult = useMemo(() => {
        delayFunction(count);
    }, [count]);

    const themeStyles = useMemo(() => {
        return {
            backgroundColor: darkTheme ? "blue" : "red",
            color: darkTheme ? "red" : "blue",
        };
    }, [darkTheme]);

    return (
        <>
            <div className="card">
                <h1>useMemo</h1>
                <label>
                    Number:{" "}
                    <input
                        type="number"
                        value={count}
                        onChange={(e) => setCount(parseInt(e.target.value))}
                    />
                </label>

                <p>Square: {squareResult}</p>

                <button onClick={() => setDarkTheme((prevTheme) => !prevTheme)}>
                    Change Theme
                </button>
                <p style={themeStyles}>Theme div</p>
            </div>
        </>
    );
}

function delayFunction(n) {
    for (let i = 0; i < 1000000000; i++);
    return n * n;
}

export default UseMemo;
