import { useContext, useEffect, useReducer } from "react";
import CartContext from "./cart-context";
import axios from "axios";
import ContextAuth from "./auth-context";

const ContextProvider = (props) => {
  let cxt = useContext(ContextAuth);

  const url = `https://crudcrud.com/api/959fb1684989475295a5f92c492e796c/`;
  const defaultCart = {
    items: [],
    totalAmount: 0,
  };

  const cartReducer = (state, action) => {
    if (action.type === "Add") {
      const existedId = state.items.findIndex(
        (item) => item.id === action.item.id
      );

      const existedItem = state.items[existedId];

      if (existedItem) {
        alert("Already added to cart");
        return {
          items: state.items,
          totalAmount: state.totalAmount,
        };
      }

      const updatedTotalAmount = state.totalAmount + action.item.price;
      const updatedItems = [action.item, ...state.items];

      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    }
    if (action.type === "Remove") {
      const existedId = state.items.findIndex((item) => item.id === action.id);
      const existedItem = state.items[existedId];

      const updatedTotalAmount = state.totalAmount - existedItem.price;
      const updatedItems = state.items.filter((item) => item.id !== action.id);

      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    }

    return defaultCart;
  };
  const [cartState, dispatchCart] = useReducer(cartReducer, defaultCart);

  const addItemHandler = async (item) => {
    dispatchCart({ type: "Add", item: item });
    const email = cxt.email.split("@");
    const newUrl = url + email[0] + "/";
    console.log(newUrl);
    try {
      const old = await axios.get(newUrl);
      console.log(old);
      let existed = false;
      if (old.data.length > 0) {
        old.data.forEach((element) => {
          if (element.id === item.id) {
            existed = true;
          }
        });
        if (existed) {
          return;
        }
      }

      await axios.post(newUrl, item);
    } catch (e) {
      console.log(e);
    }
  };

  const removeItemHandler = async (id) => {
    dispatchCart({ type: "Remove", id: id });
    const email = cxt.email.split("@");
    const newUrl = url + email[0] + "/";
    console.log(newUrl);
    try {
      const old = await axios.get(newUrl);
      let deleteId;
      old.data.forEach((element) => {
        if (element.id === id) {
          deleteId = element._id;
        }
      });
      if (deleteId) {
        await axios.delete(newUrl + deleteId);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    let email = cxt.email.split("@");
    const newUrl = url + email[0] + "/";
    console.log(newUrl);

    const load = async () => {
      try {
        const old = await axios.get(newUrl);
        console.log(old);
        old.data.forEach((element) => {
          dispatchCart({ type: "Add", item: element });
        });
      } catch (e) {
        console.log(e);
      }
    };
    load();
  },[cxt.email]);

  const cart = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cart}>{props.children}</CartContext.Provider>
  );
};

export default ContextProvider;
