import React, { useState } from "react";
import CreateAccount from "./CreateAccount.js";

const Login = () => {
  const [signBtn, setSignBtn] = useState(false);
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

  const onSubmit = (event) => {
    event.preventDefault();
    if (
      JSON.parse(localStorage.getItem("user_account")).email === email &&
      JSON.parse(localStorage.getItem("user_account")).password === password
    ) {
      console.log("good");
    } else {
      alert("정보가 없습니다.");
    }
  };
  return (
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
        <input type="submit" value="sign in" onClick={onSubmit} />
      </form>
      <div>
        Do you haven't account? Sign Up! very simple
        <button onClick={() => setSignBtn(!signBtn)}>
          {signBtn ? "X" : "Sign Up"}
        </button>
      </div>
      <div>
        {signBtn ? (
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
