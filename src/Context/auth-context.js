import React from "react";

const ContextAuth = React.createContext({
  id: "",
  addId: (id) => {},
  removeId: () => {},
  isLogin: false,
  email:''
});

export default ContextAuth;
