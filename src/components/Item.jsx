import { useState, useContext } from "react";
import { ItemsContext } from "../context/ItemsContext.jsx";

const Item = (props) => {
    const context = useContext(ItemsContext);
    const items = context["items"].map((elem, index) => {
        return (
            <div className="single-item" key={index}>{elem}</div>
        );
    });

    console.log(items);

    return (
        <div className="all-items">
            { items }
        </div>
	);
};

export default Item;
