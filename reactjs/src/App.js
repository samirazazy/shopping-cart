import React from "react";

import { BrowserRouter, Route, Link } from "react-router-dom";
import "./App.css";

import HomeScreen from "./screens/HomeScreen.js";
import ItemScreen from "./screens/ItemScreen.js";
import BasketScreen from "./screens/BasketScreen";

function App() {
  const openSidebar = () =>
    document.querySelector(".aside").classList.add("open");
  const closeSidebar = () =>
    document.querySelector(".aside").classList.remove("open");

  return (
    <BrowserRouter>
      <div className="container">
        <header className="header">
          <div className="brandName">
            <button onClick={openSidebar}>&#x2630;</button>
            <Link to="/">BRAND</Link>
          </div>
          <div className="headerLinks">
            <Link to="SignIn">SignIn</Link>
            <Link to="Card">Card</Link>
          </div>
        </header>
        <aside className="aside">
          <h3>Categories</h3>
          <button className="closeSidebar" onClick={closeSidebar}>
            X
          </button>
          <ul>
            <li>
              <Link to="/">All</Link>
            </li>
            <li>
              <Link to="/">Women</Link>
            </li>
            <li>
              <Link to="/">Men</Link>
            </li>
          </ul>
        </aside>

        <main className="main">
          <div className="content">
            <Route path="/item/:id" component={ItemScreen} />
            <Route path="/basket/:id" component={BasketScreen} />
            <Route path="/" exact={true} component={HomeScreen} />
          </div>
        </main>

        <footer className="footer">All rights reserved!</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
