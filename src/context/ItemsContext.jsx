import { createContext, useState } from "react";

export const ItemsContext = createContext();

const ItemsState = (props) => {
    const [items, setItems] = useState([]);

    const updateItems = (newItems) => {
        let finalItems = [...items, ...[newItems]];
        setItems(finalItems);
    }

    return (
        <ItemsContext.Provider value={{ items, updateItems }}>{ props.children }</ItemsContext.Provider>
    )
}

export default ItemsState;
