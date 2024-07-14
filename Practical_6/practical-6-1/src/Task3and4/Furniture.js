import "../App.css";

function Furniture(props) {
    return (
        <div className="grid-item">
            <img src={props.itemImg} alt={props.itemName} className="itemImg" />
            <h3 className="itemName">{props.itemName}</h3>
            <p className="itemPrice">Color: {props.color}</p>
            <p className="itemPrice">Rs. {props.itemPrice}</p>
            <p className="itemPrice">Manufaturer: {props.manufacturer}</p>
        </div>
    );
}

Furniture.defaultProps = {
    itemName: "Trotten",
    itemPrice: "16690",
    itemImg:
        "https://www.ikea.com/in/en/images/products/trotten-desk-sit-stand-white__1040109_pe840587_s5.jpg?f=xxs",
    color: "White",
    manufacturer: "IKEA",
};

export default Furniture;
