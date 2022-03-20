import Menu from "../Menu";
function MenuApp(props) {
  return props.data.map((item) => (
    <Menu
      {...item}
      handleAdd={props.handleAdd}
      key="menu-item-"
      {...props.itemId}
    />
  ));
}
export default MenuApp;
