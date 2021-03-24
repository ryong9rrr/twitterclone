import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "email") {
      setEmail(value);
      console.log(email);
    }
    if (name === "password") {
      setPassword(value);
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();
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
        <input type="submit" value="sign in" />
      </form>
    </div>
  );
};

export default Login;
