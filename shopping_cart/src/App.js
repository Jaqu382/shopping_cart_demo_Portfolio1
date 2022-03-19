import logo from "./logo.svg";
import "./App.css";
import Storefront from "./components/storefront";
import Checkout from "./components/storefront";

function App() {
  return (
    <div className="App">
      <header className="App-header">Shopping Cart Demo</header>
      <Checkout></Checkout>
    </div>
  );
}

export default App;
