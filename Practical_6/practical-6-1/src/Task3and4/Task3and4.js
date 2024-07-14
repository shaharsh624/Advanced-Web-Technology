import "../App.css";
import Furniture from "./Furniture";

function Task3and4() {
    return (
        <div className="grid-container App-header App">
            <Furniture
                itemName="Linanas"
                itemPrice="29990"
                itemImg="https://www.ikea.com/in/en/images/products/linanaes-3-seat-sofa-with-chaise-longue-vissle-dark-grey__1013909_pe829463_s5.jpg?f=xxs"
                color="Gray"
                manufacturer="Ravi Furnitures"
            />

            <Furniture />

            <Furniture
                itemName="Nodeland"
                itemPrice="15990"
                itemImg="https://www.ikea.com/in/en/images/products/nodeland-wardrobe-with-3-doors-medium-brown__0836934_pe778612_s5.jpg?f=xxs"
                color="Brown"
                manufacturer="New india Furnitures"
            />

            <Furniture
                itemName="Nolmyra"
                itemPrice="3990"
                itemImg="https://www.ikea.com/in/en/images/products/renberget-swivel-chair-bomstad-black__1025981_pe834276_s5.jpg?f=xxs"
                color="Black"
                manufacturer="IKEA"
            />

            <Furniture />

            <Furniture
                itemName="Oxberg"
                itemPrice="3690"
                itemImg="https://www.ikea.com/in/en/images/products/billy-oxberg-bookcase-with-door-white__1094849_pe863651_s5.jpg?f=xxs"
                color="White"
                manufacturer="he Interior Hub"
            />

            <Furniture
                itemName="Knarrevik"
                itemPrice="899"
                itemImg="https://www.ikea.com/in/en/images/products/knarrevik-bedside-table-black__0858302_pe669481_s5.jpg?f=xxs"
                color="Black"
                manufacturer="Furniture Nest"
            />

            <Furniture
                itemName="Tufjord"
                itemPrice="42990"
                itemImg="https://www.ikea.com/in/en/images/products/knarrevik-bedside-table-black__0858302_pe669481_s5.jpg?f=xxs"
                color="Black"
                manufacturer="IKEA"
            />

            <Furniture />
        </div>
    );
}

export default Task3and4;
