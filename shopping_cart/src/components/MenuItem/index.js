//Menu Item
import React from "react";

export default function MenuItem(props) {
  return (
    <div class="menu-item" key="menu-item-" {...props.itemId}>
      <h3>{props.itemName}</h3>
      <img></img>
      <span>${props.itemPrice}</span>
      <p>{props.itemDescription}</p>
      <div>
        <button onClick={() => props.handleAdd(props)}>Add to Cart</button>
      </div>
    </div>
  );
}
