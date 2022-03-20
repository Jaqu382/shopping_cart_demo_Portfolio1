import React from "react";
import MenuItem from "../MenuItem";
export default function Menu(props) {
  return (
    <fieldset>
      <legend>{props.menuName} Menu</legend>
      {props.menuItems.map((menuitem) => (
        <MenuItem
          {...menuitem}
          key={props.itemId}
          handleAdd={props.handleAdd}
        />
      ))}
    </fieldset>
  );
}
