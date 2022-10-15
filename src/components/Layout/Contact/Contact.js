import { useRef } from "react";
import classes from "./Contact.module.css";

const Contact = (props) => {
  const name = useRef();
  const email = useRef();
  const phone = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const val = {
      name: name.current.value,
      email: email.current.value,
      phone: phone.current.value,
    };
    props.post(val);
  };

  return (
    <div className={classes.form}>
      <form onSubmit={submitHandler}>
        <label>Name</label><br/>
        <input ref={name} type="text" /><br/>

        <label>E-Mail</label><br/>
        <input ref={email} type="email" /><br/>

        <label>Phone Number</label><br/>
        <input ref={phone} type="tel" /><br/>

        <button>Submit</button>
      </form>
    </div>
  );
};

export default Contact;
