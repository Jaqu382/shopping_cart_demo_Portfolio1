import Menu from "../Menu";
function MenuApp(props) {
  return props.data.map((item) => (
    <Menu {...item} handleAdd={props.handleAdd} />
  ));
}
export default MenuApp;
