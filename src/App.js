import React from "react";
// import logo from "./images/logo.svg";
import AppName from "./images/AppName.png";
import "./App.css";

function App() {
  return (
    <>
      <header>
        <nav>
          <ul className="menu">
            <li>Home</li>
            <li>Upcoming To Dos</li>
            <li>Create New To Do</li>
            <li>Log Out</li>
          </ul>
        </nav>
      </header>

      <div className="logoimg">
        <img src={AppName} alt="logo" />
      </div>
      <h2>To Do Today </h2>
      <h3>Thurs, Aug 27, 2020</h3>
      <ul>
        <li>
          <input type="checkbox" />
          Wash The Dog
        </li>
        <li>
          <input type="checkbox" />
          Get Groceries
        </li>
        <li>
          <input type="checkbox" />
          Finish Homework
        </li>
      </ul>
    </>
  );
}

export default App;
