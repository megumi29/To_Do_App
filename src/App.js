import React from "react";
import SideBar from "./Side(left) bar";
import Todo from "./Todo";
import Dashboard from "./Dashboard";
import avatarImg from "./images/AuntPersona.jpg";
import "./App.css";
import shortid from "shortid";

const TODO_LIST_KEY = "todoapp-list";
class App extends React.Component {
  state = {
    user: {
      username: "Jenna",
      message: "",
      avatarImg: avatarImg,
    },
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

  componentDidMount() {
    let todoListStr = localStorage.getItem(TODO_LIST_KEY);
    if (todoListStr) {
      this.setState({
        toDoList: JSON.parse(todoListStr),
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.toDoList !== prevState.toDoList) {
      let todoListStr = JSON.stringify(this.state.toDoList);
      localStorage.setItem(TODO_LIST_KEY, todoListStr);
    }
  }

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
    this.setState(
      (state) => {
        return {
          toDoList: [...state.toDoList, { description: state.newToDoItem }],
          newToDoItem: "",
        };
      },
      () =>
        alert(
          "You added " +
            this.state.toDoList[this.state.toDoList.length - 1].description
        )
    );
  };

  handleKeyDown = (event) => {
    if (event.key === "Enter") {
      this.handleAddNewToDoItem();
    }
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
        <SideBar user={this.user} />
        <ul>
          <p className="userSectionMessage">{this.message}</p>
          {/* <Dashboard /> */}
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
          <button
            className="addButton"
            onClick={this.handleAddNewToDoItem}
            onKeyDown={this.handleKeyDown}
          >
            Add New ToDo
          </button>
        </div>
      </div>
    );
  }
}
export default App;
