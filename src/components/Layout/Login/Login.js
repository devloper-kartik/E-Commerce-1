import { useContext, useRef, useState } from "react";
import ContextAuth from "../../../Context/auth-context";
import classes from "./Login.module.css";
import { useHistory } from "react-router-dom";

const Login = () => {
  const emailRef = useRef();
  const passRef = useRef();
  const history = useHistory();
  const cxt = useContext(ContextAuth);
  const [isLoading, setLoading] = useState(false);

  const submitHandler = async (e) => {
    setLoading(true);
    e.preventDefault();
    const res = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBP8kanqzI5kp3ArEukdpOp7NjnV7fgnJ8",
      {
        method: "POST",
        body: JSON.stringify({
          email: emailRef.current.value,
          password: passRef.current.value,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (res.ok) {
      const data = await res.json();
      const send = {
        id: data.idToken,
        email: emailRef.current.value,
      };
      cxt.addId(send);
      console.log("Done");
      history.replace("/store");
    } else {
      const data = await res.json();
      alert(data.error.message);
    }
    setLoading(false);
    console.log(emailRef.current.value, passRef.current.value);
  };

  return (
    <div className={classes.login}>
      <h1>Login</h1>
      <form onSubmit={submitHandler}>
        <div>
          <label>Your Email</label>
          <br />
          <input ref={emailRef} type="email" required />
          <br />
        </div>
        <div>
          <label>Your Password</label>
          <br />
          <input ref={passRef} type="password" required />
          <br />
        </div>
        <div>
          {isLoading && <label>Sending request...</label>}
          <br />
          <button>Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
