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
    completed: true,
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
    // Nav Section
    <div style={pageContainer}>
      <div style={navStyles.sideNavSection}>
        <img
          src={user.avatarImg}
          style={navStyles.userSectionImg}
          alt="users_avatar"
        ></img>
        <p style={navStyles.sideNavUserName}>{user.username}</p>
        <nav>
          <ul>
            <li style={navStyles.navMenu}>Home</li>
            <li style={navStyles.navMenu}>Upcoming To Dos</li>
            <li style={navStyles.navMenu}>Create New To Do</li>
            <li>Log Out</li>
          </ul>
          <div style={navStyles.logoImg}>
            <img src={AppName} style={navStyles.imgSize} alt="logo" />
          </div>
        </nav>
      </div>

      {/* Todo List Section */}
      <div>
        <div>
          <p style={userSectionMessage}>{user.message}</p>
        </div>
        <ul>
          <h3>ToDos</h3>
          <p className="date">Thursday, Sept 3, 2020</p>
          {toDoLists.map((toDoList) => {
            return (
              <li style={listStyles.list}>
                {/* <span className="catergory">{toDoList.title}</span> */}
                <div>
                  <input
                    style={listStyles.checkBoxes}
                    type="checkbox"
                    checked={toDoList.completed}
                  />
                </div>

                <div
                  style={
                    toDoList.completed
                      ? navStyles.toDoCompleted
                      : navStyles.toDoDescription
                  }
                >
                  <span className="ToDo">{toDoList.description}</span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

// Styles
const pageContainer = {
  display: "flex",
};
const navStyles = {
  sideNavSection: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    height: "100%",
    padding: "1rem",
    backgroundColor: "#b892ff",
    fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
    fontWeight: "bold",
  },
  navMenu: {
    color: "white",
    marginRight: "1rem",
    marginBottom: "2rem",
  },
  sideNavUserName: {
    marginBottom: "3rem",
    color: "#ffff",
  },
  userSectionImg: {
    width: "10rem",
    borderRadius: "50%",
  },
  logoImg: {
    position: "absolute",
    bottom: "1rem",
  },
  imgSize: {
    width: "60%",
  },
  toDoCompleted: {
    color: "#d8dbe2",
    textDecoration: "line-through",
  },
  toDoDescription: {
    fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
  },
};

const listStyles = {
  list: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid #8e7dbe",
    marginBottom: "2rem",
    marginRight: "6rem",
    marginLeft: "6rem",
    borderRadius: "5rem",
    boxShadow: "0 .2rem .5rem 0 #8e7dbe",
  },
  checkBoxes: {
    display: "flex",
    flexDirection: "row",
    margin: ".5rem",
    fontSize: "11px",
  },
};

const userSectionMessage = {
  fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
  fontWeight: "bold",
  textAlign: "center",
  padding: "1rem",
};

export default App;
