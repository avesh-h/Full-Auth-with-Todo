import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();

  const [getUser, setUser] = useState({});
  const changeHandler = (e) => {
    const { name, value } = e.target;

    setUser({
      ...getUser,
      [name]: value,
    });
  };
  const loginHandler = (e) => {
    e.preventDefault();
    const existUsers = JSON.parse(localStorage.getItem("USER"));
    const findUser = existUsers.find(
      (user) =>
        user.email === getUser.email && user.password === getUser.password
    );
    if (findUser) {
      localStorage.setItem("Current_User", JSON.stringify(findUser));
      navigate("/dashboard");
    } else {
      navigate("/");
    }
  };
  return (
    <form onSubmit={loginHandler}>
      <label>Email:</label>
      <input type="text" name="email" onChange={changeHandler} />
      <br />
      <label>Password:</label>
      <input type="password" name="password" onChange={changeHandler} /> <br />
      <button type="submit">Log in</button>
    </form>
  );
};

export default LoginForm;
