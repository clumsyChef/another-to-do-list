import { useState, useContext } from "react";
import { ItemsContext } from "../context/ItemsContext.jsx";

const Container = () => {
    const [value, setValue] = useState("");
    const context = useContext(ItemsContext);

    const addItem = () => {
        context.updateItems(value);
        setValue("")
        document.querySelector("#item-input").value = ""
    }

    const updateState = (elem) => {
        const presentValue = elem.target.value;
        if(presentValue.length > 0) {
            setValue(presentValue);
        }
    }

    return (
        <>
            <input type="text" id="item-input" onChange={(e) => { updateState(e) }} />
            <button type="button" id="add-item" onClick={ addItem }>Add Item</button>
        </>
    )
}

export default Container;
