import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({});
  const changeHandler = (e) => {
    const { name, value } = e.target;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const existUsers = JSON.parse(localStorage.getItem("USER")) || [];
    // console.log(user);
    if (user.email.includes("@") && user.password > 5) {
      const userInfo = {
        ...user,
        userId: new Date().toISOString(),
      };
      const usersArray = [...existUsers, userInfo];
      localStorage.setItem("USER", JSON.stringify(usersArray));
      navigate("/login");
    } else {
      return;
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <label>Name:</label>
      <input type="text" name="name" onChange={changeHandler} />
      <br />
      <label>Email:</label>
      <input type="text" name="email" onChange={changeHandler} />
      <br />
      <label>Set Password:</label>
      <input type="password" name="password" onChange={changeHandler} /> <br />
      <button type="submit">Register</button>
    </form>
  );
};

export default SignUpForm;
