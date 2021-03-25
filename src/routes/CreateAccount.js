import React, { useState } from "react";

const CreateAccount = () => {
  const [disabled, setDisabled] = useState(false);
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
  const createAccount = async (event) => {
    const USER = JSON.parse(localStorage.getItem("USERS"));
    event.preventDefault();
    setDisabled(true);
    await new Promise((r) => setTimeout(r, 1000));
    if (USER.find((user) => user.email === email)) {
      alert("다른 이메일을 입력해주세요.");
    } else {
      const newAccount = {
        email,
        password,
      };
      USER.push(newAccount);
      localStorage.setItem("USERS", JSON.stringify(USER));
      alert("계정이 생성되었습니다!");
      setEmail("");
      setPassword("");
    }
    setDisabled(false);
  };

  return (
    <form>
      <div>Create your Account</div>
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
      <button disabled={disabled} type="submit" onClick={createAccount}>
        Sign Up
      </button>
    </form>
  );
};

export default CreateAccount;
