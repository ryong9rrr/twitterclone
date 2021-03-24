import React, { useState } from "react";
import "../css/style.css";
import "../components/Router.js";
import AppRouter from "./Router.js";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <>
      <AppRouter isLogin={isLogin} />
      <footer>&copy; {new Date().getFullYear()} twitter</footer>
    </>
  );
}

export default App;
