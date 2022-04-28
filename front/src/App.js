// import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import GraphPage from './components/graph/GraphPage';
import Main from './components/main/Main'
import Login from './components/login/Login'
import Register from "./components/register/Register";
import Blog from './components/blog/Blog';

function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/main" exact element={<Main />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/graph" element={<GraphPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Main />} />
        </Routes>
      </Router>

    </div>
  )
 
}

export default App;
