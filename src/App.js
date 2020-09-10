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
    completed: true,
  },
  {
    id: 4,
    title: "Work",
    description: "Fix ToDo list",
    completed: false,
  },
];

function App() {
  return (
    <>
      {/* Todo List Section */}
      <SideBar user={user} />
      <p style={userSectionMessage}>{user.message}</p>
      <ul>
        <h3>ToDos</h3>
        <p className="date">Thursday, Sept 3, 2020</p>
        {toDoList.map((todo) => {
          return <Todo todo={todo} />;
        })}
      </ul>
    </>
  );
}

const userSectionMessage = {
  fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
  fontWeight: "bold",
  textAlign: "center",
  fontSize: "20px",
};

export default App;
