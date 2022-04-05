import { useContext, useState } from "react";
import Item from "./components/Item.jsx";
import ItemsState from "./context/ItemsContext.jsx";
import Container from "./components/Container.jsx";

const App = () => {
    return (
        <ItemsState>
            <div className="App">
                <Container />
                <Item />
            </div>
        </ItemsState>
    )
}

export default App;
