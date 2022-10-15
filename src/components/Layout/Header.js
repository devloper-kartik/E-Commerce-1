import { useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import ContextAuth from "../../Context/auth-context";
import Cart from "../Cart/Cart";
import classes from "./Header.module.css";

const Header = (props) => {
  const cxt = useContext(ContextAuth);
  const history = useHistory();

  const clickHandler = () => {
    const logout = window.confirm("Are you Sure");
    if (logout) {
      cxt.removeId();
      history.replace("/login");
    }
  };
  return (
    <>
      <header className={classes.header}>
        <div className={classes["header-item"]}>
          <NavLink to="./home" activeClassName={classes.active}>
            <span>HOME</span>
          </NavLink>
          {cxt.isLogin && (
            <div>
              <NavLink to="./store" activeClassName={classes.active}>
                <span>STORE</span>
              </NavLink>
              <NavLink to="./about" activeClassName={classes.active}>
                <span>ABOUT</span>
              </NavLink>
              <NavLink to="./contact" activeClassName={classes.active}>
                <span>Contact Us </span>
              </NavLink>
              <Cart onCart={props.onCart} />
            </div>
          )}
          {!cxt.isLogin && (
            <NavLink to="./login" activeClassName={classes.active}>
              <span>LOGIN</span>
            </NavLink>
          )}
          {cxt.isLogin && (
            <span className={classes.logout} onClick={clickHandler}>
              LOGOUT
            </span>
          )}
        </div>
      </header>
      <h1 className={classes.h1}>The Generics</h1>
    </>
  );
};

export default Header;
