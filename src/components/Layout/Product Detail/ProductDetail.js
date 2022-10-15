import { useContext } from "react";
import { useParams } from "react-router-dom";
import CartContext from "../../../Context/cart-context";
import classes from "./ProductDetail.module.css";
const ProductDetail = () => {
  const params = useParams("productId");
  const cxt = useContext(CartContext);

  const productsArr = [
    {
      id: 1,
      album: "Album 1",
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },
    {
      id: 2,
      album: "Album 2",
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },
    {
      id: 3,
      album: "Album 3",
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },
    {
      id: 4,
      album: "Album 4",
      title: "Blue Color",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];

  const newArr = productsArr.filter((product) => {
    return product.album === params.productId;
  });
  const newObj = newArr[0];
  console.log(newObj);

  const item = {
    id: newObj.id,
    album: newObj.album,
    price: newObj.price,
    src: newObj.imageUrl,
  };

  const addItem = () => {
    cxt.addItem(item);
  };

  return (
    <div className={classes.Detail}>
      <div className={classes.Image}>
        <img src={newObj.imageUrl} alt="unable to load" />
      </div>
      <div className={classes.Price}>
        <label>Product Name :</label>
        <br />
        <p>{newObj.album}</p>
        <label>Title :</label>
        <br />
        <p>{newObj.title}</p>
        <label>Price :</label>
        <br />
        <p>{`$${newObj.price}`}</p>
        <button onClick={addItem}>Buy</button>
      </div>
      <div className={classes.desp}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis
          faucibus libero. Etiam et lobortis est, ut dapibus massa. Etiam eu
          lorem sed orci rutrum ultrices non in nisl. Nullam magna magna,
          porttitor id libero eget, hendrerit varius ante. Pellentesque blandit
          ligula lorem, et viverra urna feugiat quis. Aliquam dapibus erat sed
          nunc semper, nec faucibus nisl condimentum. Pellentesque dictum enim
          ut enim commodo ornare. Vivamus sit amet aliquet leo, ac lacinia
          velit. Curabitur imperdiet nisi nec elit porttitor pellentesque. Fusce
          tempus enim leo, ac maximus ante vehicula sed. Vivamus vitae eleifend
          purus, nec finibus lorem. Proin dignissim nulla arcu. Cras vel tempor
          nisi. Donec id mauris a nisl consectetur pellentesque in id nunc.
          Pellentesque vehicula rhoncus odio, ac dapibus velit placerat vitae.
        </p>
      </div>
    </div>
  );
};

export default ProductDetail;
