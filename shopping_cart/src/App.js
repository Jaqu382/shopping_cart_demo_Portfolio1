import "./App.css";
import MenuApp from "./components/MenuApp";
import Cart from "./components/Cart";
import data from "./components/MenuData";
import { useState } from "react";
function App() {
  const menuData = data;
  const [cartItems, setCartItems] = useState([]);
  //Code adapted from React Tutorial
  //Create a handler function to deal with adding items
  const handleAdd = (item) => {
    //using the find method to look for item that matches the product id
    const exist = cartItems.find((x) => x.id === item.id);
    //if the product is found in the cart,
    if (exist) {
      setCartItems(
        //compare all of the cart Itesm to the ids of all items already in the cart.
        cartItems.map((x) =>
          //if you find the matching ids, add 1 to whatever quantity is there
          x.id === item.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    }
    // If the item is not already in the cart
    else {
      //add the item to cartItems array and change it's qty to 1
      setCartItems([...cartItems, { ...item, qty: 1 }]);
    }
  };
  return (
    <div className="App">
      <form>
        <MenuApp handleAdd={handleAdd} data={menuData}></MenuApp>
        <Cart handleAdd={handleAdd} cartItems={cartItems}></Cart>
      </form>
    </div>
  );
}
export default App;
