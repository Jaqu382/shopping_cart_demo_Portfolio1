//Menu Item
import React from "react";

export default function MenuItem(props) {
  return (
    <div class="menu-item" key="menu-item-" {...props.itemId}>
      <h3>{props.itemName}</h3>
      <div>
        <img src={props.image} alt={props.alt}></img>
      </div>
      <span>${props.itemPrice}</span>
      <p>{props.itemDescription}</p>
      <div>
        <button className="add_to_cart" onClick={() => props.handleAdd(props)}>
          Add to cart
        </button>
      </div>
    </div>
  );
}
