import React from "react";
import SideBar from "./Side(left) bar";
import Todo from "./Todo";
// import AppName from "./images/AppName.png";
import avatarImg from "./images/AuntPersona.jpg";
import "./App.css";

const user = {
  username: "Jenna",
  message: "Good Morning! What's On Your ToDos Today?",
  avatarImg: avatarImg,
};

let toDoList = [
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
  {
    id: 4,
    title: "Work",
    description: "Fix ToDo list",
    completed: true,
  },
];

function App() {
  return (
    <div style={pageWrapper}>
      {/* Todo List Section */}
      <SideBar user={user} />
      <ul>
        <p style={userSectionMessage}>{user.message}</p>
        <h3>ToDos</h3>
        <p className="date">Thursday, Sept 3, 2020</p>
        {toDoList.map((todo) => {
          return <Todo todo={todo} />;
        })}
      </ul>
    </div>
  );
}

const pageWrapper = {
  display: "flex",
};

const userSectionMessage = {
  fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
  fontWeight: "bold",
  textAlign: "center",
  fontSize: "20px",
};

export default App;
