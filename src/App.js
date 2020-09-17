import React from "react";
import SideBar from "./Side(left) bar";
import Todo from "./Todo";
import avatarImg from "./images/AuntPersona.jpg";
import "./App.css";
import shortid from "shortid";

const user = {
  username: "Jenna",
  message: "Good Morning! What's On Your ToDos Today?",
  avatarImg: avatarImg,
};

class App extends React.Component {
  state = {
    toDoList: [
      {
        id: shortid.generate(),
        title: "Errands To Run",
        description: "Get Groceries",
        completed: true,
      },
      {
        id: shortid.generate(),
        title: "Bills To Pay",
        description: "Credit Card",
        completed: false,
      },
      {
        id: shortid.generate(),
        title: "Chores",
        description: "Do Laundry",
        completed: false,
      },
      {
        id: shortid.generate(),
        title: "Work",
        description: "Fix ToDo list",
        completed: true,
      },
    ],
    newToDoItem: "",
  };

  handleCheckedToDoItem = (id) => {
    this.setState((state) => {
      let newToDoList = this.state.toDoList.map((item) => {
        if (item.id === id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      });
      return { toDoList: newToDoList };
    });
  };

  handleChangeToDoItem = (event) => {
    this.setState({ newToDoItem: event.target.value });
  };

  handleAddNewToDoItem = (event) => {
    this.setState((state) => {
      return {
        toDoList: [...state.toDoList, { description: state.newToDoItem }],
        newToDoItem: "",
      };
    });
  };

  handleAddNewToDoItemMessage = () => {
    alert("You added " + this.state.newToDoItem);
  };

  handleDeleteNewToDoItem = (id) => {
    this.setState((state) => {
      const filteredArray = state.toDoList.filter((todo) => {
        if (todo.id === id) {
          return false;
        } else {
          return true;
        }
      });

      return {
        toDoList: filteredArray,
      };
    });
  };

  render() {
    return (
      <div className="pageWrapper">
        {/* Todo List Section */}
        <SideBar user={user} />
        <ul>
          <p className="userSectionMessage">{user.message}</p>
          <h3>ToDos</h3>
          <p className="date">Thursday, Sept 3, 2020</p>
          {this.state.toDoList.map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              onCheckedTodo={this.handleCheckedToDoItem}
              onDeleteItem={this.handleDeleteNewToDoItem}
            />
          ))}
        </ul>
        <br />
        <div className="input_button">
          <input
            type="text"
            onChange={this.handleChangeToDoItem}
            value={this.state.newToDoItem}
          ></input>
          <button className="addButton" onClick={this.handleAddNewToDoItem}>
            Add New ToDo
          </button>
        </div>
      </div>
    );
  }
}
export default App;
