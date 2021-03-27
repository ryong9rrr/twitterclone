import React from "react";
import "./css/style.css";
import Login from "./components/Login";
import { usersInfo } from "./userData";

function App() {
  localStorage.setItem("USERS", JSON.stringify(usersInfo));

  return (
    <>
      <Login />
      <footer>&copy; {new Date().getFullYear()} notion</footer>
    </>
  );
}

export default App;
