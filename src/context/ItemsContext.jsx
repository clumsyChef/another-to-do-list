import { createContext, useState } from "react";

export const ItemsContext = createContext();

const ItemsState = (props) => {
    const state = [];

    const [items, setItems] = useState(state);

    const updateItems = (newItems) => {
        let finalItems = [...state, ...newItems];
        setItems(finalItems);
    }

    return (
        <ItemsContext.Provider value={{ items, updateItems }}>{ props.children }</ItemsContext.Provider>
    )
}

export default ItemsState;
