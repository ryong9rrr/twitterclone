import React, { useState, useEffect } from "react";
import "../css/style.css";
import "../components/Router.js";
import AppRouter from "./Router.js";

function App() {
  const testObj = {
    email: "ysy@naver.com",
    password: "1234",
  };
  localStorage.setItem("user_account", JSON.stringify(testObj));

  return (
    <>
      <AppRouter />
      <footer>&copy; {new Date().getFullYear()} twitter</footer>
    </>
  );
}

export default App;
