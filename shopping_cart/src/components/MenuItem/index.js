//Menu Item
import React from "react";

export default function MenuItem(props) {
  return (
    <div class="menu-item" id="menu-item-" {...props.itemId}>
      <h2>{props.itemName}</h2>
      <span>${props.itemPrice}</span>
      <p>{props.itemDescription}</p>
      <button onClick={() => props.handleAdd(props.menuitem)}>
        Add to Cart
      </button>
    </div>
  );
}
