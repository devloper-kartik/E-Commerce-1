import Items from "./Items";
import classes from "./Product.module.css";

const Product = (props) => {
  const newArr = props.product.map((element) => {
    
    return (
      <Items
        key={element.id}
        id={element.id}
        album={element.album}
        price={element.price}
        src={element.imageUrl}
      />
    );
  });

  return <div className={classes.Product}>{newArr}</div>;
};

export default Product;
