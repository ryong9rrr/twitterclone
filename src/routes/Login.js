import React, { useState } from "react";
import CreateAccount from "./CreateAccount.js";
import Home from "./Home";

const Login = () => {
  const [login, setLogin] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [toggleBtn, setToggleBtn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "email") {
      setEmail(value);
    }
    if (name === "password") {
      setPassword(value);
    }
  };

  const onSubmit = async (event) => {
    const USER = JSON.parse(localStorage.getItem("USERS"));
    event.preventDefault();
    setDisabled(true);
    await new Promise((r) => setTimeout(r, 1000));
    if (
      USER.find((user) => user.email === email && user.password === password)
    ) {
      setLogin(true);
    } else {
      alert("정보가 없습니다.");
    }
    setDisabled(false);
  };

  return login ? (
    <Home />
  ) : (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="email"
          onChange={onChange}
          value={email}
          type="email"
          placeholder="Email"
          required
        />
        <input
          name="password"
          onChange={onChange}
          value={password}
          type="password"
          placeholder="Password"
          required
        />
        <button disabled={disabled} type="submit">
          Sign in
        </button>
      </form>
      <div>
        Do you haven't account? Sign Up! very simple
        <button onClick={() => setToggleBtn(!toggleBtn)}>
          {toggleBtn ? "X" : "Sign Up"}
        </button>
      </div>
      <div>
        {toggleBtn ? (
          <>
            <CreateAccount />
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Login;
