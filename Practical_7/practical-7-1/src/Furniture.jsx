import "./App.css";
import { useState } from "react";

function Furniture(props) {
    const [count, setCount] = useState(0);

    const addToCart = () => {
        setCount(count + 1);
    };

    const remToCart = () => {
        setCount(count - 1);
    };

    return (
        <div className="grid-item">
            <img src={props.itemImg} alt={props.itemName} className="itemImg" />
            <h3 className="itemName">{props.itemName}</h3>
            <p className="itemPrice">Rs. {props.itemPrice}</p>
            <p>Liked: {count}</p>
            <button onClick={addToCart}>🤍</button>
        </div>
    );
}

Furniture.defaultProps = {
    itemName: "Trotten",
    itemPrice: "16690",
    itemImg:
        "https://www.ikea.com/in/en/images/products/trotten-desk-sit-stand-white__1040109_pe840587_s5.jpg?f=xxs",
};

export default Furniture;
