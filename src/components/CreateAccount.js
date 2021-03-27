import React, { useState } from "react";

const CreateAccount = () => {
  const [disabled, setDisabled] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
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
    if (name === "lastName") {
      setLastName(value);
    }
    if (name === "firstName") {
      setFirstName(value);
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
      const id = USER.length;
      const newAccount = {
        id,
        email,
        password,
        lastName,
        firstName,
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
      <input
        name="lastName"
        onChange={onChange}
        value={lastName}
        type="text"
        placeholder="Last Name"
        required
      />
      <input
        name="firstName"
        onChange={onChange}
        value={firstName}
        type="text"
        placeholder="First Name"
        required
      />
      <button disabled={disabled} type="submit" onClick={createAccount}>
        Sign Up
      </button>
    </form>
  );
};

export default CreateAccount;
