export default function Cart(props) {
  return (
    <div>
      <hr></hr>
      <h2>My Basket</h2>
      <div>{props.cartItems.length === 0 && <div>Cart is Empty</div>}</div>
      {props.cartItems.map((item) => (
        <div>
          <div>{item.name}</div>
          <div>
            <button onClick={() => props.handleAdd(item)}>+</button>
            <button onClick={() => props.handleRemove(item)}>-</button>
            <div>
              {item.qty} x ${item.itemPrice}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
