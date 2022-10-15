import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Music from "./components/Layout/Center/Music";
import CartPage from "./components/Cart/CartPage";
import { useState } from "react";
import ContextProvider from "./Context/ContextProvider";
import { Route, Switch,Redirect } from "react-router-dom";
import About from "./components/Layout/About/About";
import Contact from "./components/Layout/Contact/Contact";
import ProductDetail from "./components/Layout/Product Detail/ProductDetail";
import Login from "./components/Layout/Login/Login";


function App() {
  const [isCart, setCart] = useState(false);

  const setCartHandler = () => {
    setCart(!isCart);
  };

  const postHandler = async (data) => {
    console.log("Start Post");
    const response = await fetch(
      "https://react-http-75eb7-default-rtdb.firebaseio.com/contact.json",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log(response);
  };

  return (
    <ContextProvider>
      {isCart && <CartPage close={setCartHandler} />}
      <Header onCart={setCartHandler} />
      <Switch>
        <Route path={"/store/:productId"} exact>
          <ProductDetail />
        </Route>
        <Route path={"/"} exact></Route>
        <Route path={"/store"} exact >
          <Music />
        </Route>
        <Route path={"/About"} exact>
          <About />
        </Route>
        <Route path={"/contact"} exact>
          <Contact post={postHandler} />
        </Route>
        <Route path="/login" exact>
          <Login/>
        </Route>
        <Route path="*">
          <Redirect to='/store'/>
        </Route>
      </Switch>
      <Footer />
    </ContextProvider>
  );
}

export default App;
