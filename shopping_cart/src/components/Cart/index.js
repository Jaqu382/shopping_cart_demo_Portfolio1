export default function Cart(props) {
  const { cartItems, handleAdd, handleRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.itemPrice * c.qty, 0);
  return (
    <fieldset>
      <legend>My Cart</legend>
      <div>{props.cartItems.length === 0 && <div>Cart Is Empty</div>}</div>
      {props.cartItems.map((item) => (
        <div key={item.itemId}>
          <div>{item.itemName}</div>
          <div>
            <button onClick={() => handleAdd(item)}>+</button>
            <button onClick={() => handleRemove(item)}>-</button>
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
        </div>
      )}
    </fieldset>
  );
}
