export default function Cart(props) {
  const { cartItems, handleAdd, handleRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.itemPrice * c.qty, 0);
  return (
    <fieldset className="cart">
      <legend id="myCart" className="cart_title">
        Cart
      </legend>
      <div>{props.cartItems.length === 0 && <div>Cart Is Empty</div>}</div>
      {props.cartItems.map((item) => (
        <div key={item.itemId}>
          <div>{item.itemName}</div>
          <div>
            <button className="add" onClick={() => handleAdd(item)}>
              +
            </button>
            <button className="remove" onClick={() => handleRemove(item)}>
              -
            </button>
          </div>
          <div>
            {item.qty} x ${item.itemPrice}
          </div>
        </div>
      ))}
      {cartItems.length !== 0 && (
        <div>
          <hr />
          <div>
            <strong>Total Items Price</strong>
          </div>
          <div>${itemsPrice}</div>
          <hr />
          <div>
            <button className="checkout">Checkout</button>
          </div>
        </div>
      )}
    </fieldset>
  );
}
