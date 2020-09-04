import React from "react";
// import logo from "./images/logo.svg";
import AppName from "./images/AppName.png";
import avatarImg from "./images/AuntPersona.jpg";
import "./App.css";

const user = {
  username: "Jenna",
  message: "Good Morning! What's On Your ToDos Today?",
  avatarImg: avatarImg,
};

let toDoLists = [
  {
    id: 1,
    title: "Errands To Run",
    description: "Get Groceries",
    completed: false,
  },
  {
    id: 2,
    title: "Bills To Pay",
    description: "Credit Card",
    completed: false,
  },
  {
    id: 3,
    title: "Chores",
    description: "Do Laundry",
    completed: false,
  },
];

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

      <div className="user-section">
        <img src={user.avatarImg} alt="users_avatar" />
        <p style={userSection}>{user.username}</p>
        <p style={userSectionMessage}>{user.message}</p>
      </div>

      <div>
        <ul>
          <h3>ToDos</h3>
          <p className="date">Thursday, Sept 3, 2020</p>
          {toDoLists.map((toDoList) => {
            return (
              <li style={listStyles}>
                {/* <span className="catergory">{toDoList.title}</span> */}
                <div style={list}>
                  <input
                    className="checkboxes"
                    type="checkbox"
                    checked={toDoList.completed}
                  />
                </div>

                <div style={list}>
                  <span className="ToDo">{toDoList.description}</span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

const listStyles = {
  textAlign: "left",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
};

const list = {
  display: "flex",
  flexDirection: "row",
  margin: "0",
  padding: ".5rem",
  fontSize: "11px",
};

const userSectionMessage = {
  fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
  fontWeight: "bold",
  textAlign: "center",
};

const userSection = {
  fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
  fontWeight: "bold",
};

export default App;
