import React from "react";
import "../css/style.css";
import Login from "../routes/Login";
import { usersInfo } from "../userData";

function App() {
  localStorage.setItem("USERS", JSON.stringify(usersInfo));

  return (
    <>
      <Login />
      <footer>&copy; {new Date().getFullYear()} twitter</footer>
    </>
  );
}

export default App;
