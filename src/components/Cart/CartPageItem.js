import classes from "./CartPageItem.module.css";

const CartPageItem = (props) => {
  return (
    <div className={classes.item}>
      <div className={classes.image}>
        <img src={props.src} alt="unable to load"></img>
        <p>{props.title}</p>
      </div>
      <div className={classes.price}>{`$${props.price}`}</div>
      <div className={classes.quantity}>
        {props.quantity}
        <button onClick={props.remove}>Remove</button>
      </div>
    </div>
  );
};

export default CartPageItem;
