import "./App.css";
import MenuApp from "./components/MenuApp";
import Cart from "./components/Cart";
import data from "./components/MenuData";
import Header from "./components/Header/Header";
import { useState } from "react";
function App() {
  const menuData = data;
  const [cartItems, setCartItems] = useState([]);
  //Create a handler function to deal with adding items
  const handleAdd = (product) => {
    const exist = cartItems.find((x) => x.itemId === product.itemId);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.itemId === product.itemId ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const handleRemove = (product) => {
    const exist = cartItems.find((x) => x.itemId === product.itemId);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.itemId !== product.itemId));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.itemId === product.itemId ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  return (
    <div className="App">
      <Header countCartItems={cartItems.length}></Header>
      <MenuApp
        handleAdd={handleAdd}
        data={menuData}
        cartItems={cartItems}
      ></MenuApp>
      <Cart
        handleAdd={handleAdd}
        cartItems={cartItems}
        handleRemove={handleRemove}
      ></Cart>
    </div>
  );
}
export default App;
