import { useContext, useState } from "react";
import Item from "./components/Item.jsx";
import { ItemsContext } from "./context/ItemsContext.jsx";
import ItemsState from "./context/ItemsContext.jsx";

const App = () => {
    const [value, setValue] = useState("");
    const context = useContext(ItemsContext);

    const addItem = () => {
        const itemValue = document.querySelector("item-input");
    }

    const updateState = (elem) => {
        const presentValue = elem.target.value;
        console.log("hey -> ", context);
        if(presentValue.length > 0) {
            setValue(presentValue);
        }
    }

    return (
        <ItemsState>
            <div className="App">
                <input type="text" id="item-input" onChange={(e) => { updateState(e) }} />
                <button type="button" id="add-item" onClick={ addItem }>Add Item</button>
            </div>
        </ItemsState>
    )
}

export default App;
