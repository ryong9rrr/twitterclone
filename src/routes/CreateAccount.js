import React, { useState } from "react";

const CreateAccount = () => {
  const [account, setAccount] = useState({ email: "", password: "" });

  console.log(account);

  return (
    <form>
      <div>Create your Account</div>
      <input name="Email" type="email" placeholder="Email" />
      <input name="password" type="password" placeholder="Password" />
      <input type="submit" value="Sign Up"></input>
    </form>
  );
};

export default CreateAccount;
