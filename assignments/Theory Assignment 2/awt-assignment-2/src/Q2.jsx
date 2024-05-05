import { useEffect, useState } from "react";
import "./App.css";

const Timer = () => {
    const [time, setTime] = useState(900);

    useEffect(() => {
        let timer = setInterval(() => {
            setTime((time) => {
                if (time === 0) {
                    clearInterval(timer);
                    setTime(900);
                    alert("Time is up!");
                    return 0;
                } else return time - 1;
            });
        }, 1000);
    }, []);

    return (
        <div className="bg">
            <p>
                <strong>Time Left:</strong>{" "}
                {`${Math.floor(time / 60)}`.padStart(2, 0)} minutes{" "}
                {`${time % 60}`.padStart(2, 0)} seconds before confirming order
            </p>
        </div>
    );
};

export default function Q2() {
    const handleSubmit = () => {
        alert("Your order has been placed successfully!");
    };
    return (
        <>
            <h1>Enter your Shipping Information</h1>
            <Timer />
            <form>
                <table>
                    <tbody>
                        <tr>
                            <input type="text" placeholder="Full Name" />
                        </tr>
                        <tr>
                            <input type="text" placeholder="Contact Number" />
                        </tr>
                        <tr>
                            <input type="text" placeholder="Shipping Address" />
                        </tr>
                        <tr>
                            <button onClick={handleSubmit}>Submit</button>
                        </tr>
                    </tbody>
                </table>
            </form>
        </>
    );
}
