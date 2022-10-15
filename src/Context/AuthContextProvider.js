import { useEffect, useReducer } from "react";
import ContextAuth from "./auth-context";

const AuthProvider = (props) => {
  const deafultID = {
    id: "",
    isLogin: false,
    email: "",
  };

  const idReducer = (state, action) => {
    if (action.type === "Add") {
      console.log(action.id);
      localStorage.setItem("login", JSON.stringify(action.id));
      console.log("done");
      return {
        id: action.id,
        isLogin: true,
        email: action.id.email,
      };
    }

    if (action.type === "local") {
      return {
        id: action.id,
        isLogin: true,
        email: action.id.email,
      };
    }

    if (action.type === "Remove") {
      localStorage.removeItem("login");
      return {
        id: "",
        isLogin: false,
        email: "",
      };
    }

    return deafultID;
  };

  const [idState, dispatchId] = useReducer(idReducer, deafultID);

  const addHandler = (id) => {
    dispatchId({ type: "Add", id: id });
  };

  const removeHandler = () => {
    dispatchId({ type: "Remove" });
  };

  //local storage
  useEffect(() => {
    const isLogin = JSON.parse(localStorage.getItem("login"));
    console.log(isLogin); 
    if (isLogin) {
      dispatchId({ type: "local", id: isLogin });
    }
  }, []);

  const auth = {
    id: idState.id,
    addId: addHandler,
    removeId: removeHandler,
    isLogin: idState.isLogin,
    email: idState.email,
  };

  return (
    <ContextAuth.Provider value={auth}>{props.children}</ContextAuth.Provider>
  );
};

export default AuthProvider;
