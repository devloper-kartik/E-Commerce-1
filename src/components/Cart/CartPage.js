import { useContext } from "react";
import CartContext from "../../Context/cart-context";
import Modal from "../UI/Modal";
import classes from "./CartPage.module.css";
import CartPageItem from "./CartPageItem";
const CartPage = (props) => {
  const cxt = useContext(CartContext);

  const orderHandler = () => {
    if (cxt.items.length > 0) {
      alert("Thank You For Ordering");
    } else {
      alert("You have not selected the album");
    }
  };

  const removingItem = (id) => {
    cxt.removeItem(id);
  };

  const List = cxt.items.map((element) => {
    return (
      <CartPageItem
        key={element.id}
        id={element.id}
        title={element.album}
        price={element.price}
        src={element.src}
        quantity="1"
        remove={removingItem.bind(null, element.id)}
      />
    );
  });

  return (
    <Modal close={props.close}>
      <div className={classes.cart}>
        <h2>Cart </h2>
        <div className={classes.item}>
          <span>Item</span>
          <span>Price</span>
          <span>Quantity</span>
        </div>
        {List}
      </div>
      <div className={classes.order}>
        <div>
          <span>Total Amount - </span>
          <span>{`$${cxt.totalAmount}`}</span>
        </div>
        <button onClick={orderHandler}>Order</button>
      </div>
    </Modal>
  );
};

export default CartPage;
