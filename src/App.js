import { useState, useEffect, useCallback, useRef } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Content from "./Content";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import News from "./pages/News";

function App() {
  return (
    <div style={{ padding: 50 }}>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          git remote -v
          <li>
            <Link to="/news">News</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" Component={Home}></Route>
        <Route path="/news" Component={News}></Route>
        <Route path="/contact" Component={Contact}></Route>
      </Routes>
    </div>
  );
}
export default App;
