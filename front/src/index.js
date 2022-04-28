import React from "react";
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import Main from './components/main/Main';
import Login from './components/login/Login';
import Register from "./components/register/Register";
import Blog from "./components/blog/Blog"

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById("root")
);
