import React from "react";
export default function Header(props) {
  return (
    <header>
      <div className="business_name">
        <h1>Murray's Italian Cuisine</h1>
      </div>
      <div>
        <ul>
          <li>
            <a href="../app.js">My Account</a>
          </li>
          <li>
            <a href="../app.js">Cart</a>

            {props.countCartItems ? <span>{props.countCartItems}</span> : " "}
          </li>
        </ul>
      </div>
    </header>
  );
}
