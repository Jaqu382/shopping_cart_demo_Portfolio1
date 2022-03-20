import Menu from "../Menu";
function MenuApp(props) {
  return props.data.map((item) => (
    <Menu
      {...item}
      handleAdd={props.handleAdd}
      key="menu-item-"
      {...item.itemId}
    />
  ));
}
export default MenuApp;
