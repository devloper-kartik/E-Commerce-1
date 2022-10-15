import { useContext } from "react";
import CartContext from "../../Context/cart-context";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const noofItem = useContext(CartContext);

  return (
    <button onClick={props.onCart} className={classes.button}>
      Cart
      <span>{noofItem.items.length}</span>
    </button>
  );
};

export default Cart;
