import React from "react";
import shortid from "shortid";
import Todo from "./Todo";

import "./App.css";

const TODO_LIST_KEY = "todoapp-list";
class ToDoList extends React.Component {
  state = {
    toDoList: [],
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
          toDoList: [
            ...state.toDoList,
            { id: shortid.generate(), description: state.newToDoItem },
          ],
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
      <>
        <div className="addtodo-input">
          <h3>ToDos</h3>
          <ul>
            {this.state.toDoList.map((todo) => (
              <Todo
                key={todo.id}
                todo={todo}
                onCheckedTodo={this.handleCheckedToDoItem}
                onDeleteItem={this.handleDeleteNewToDoItem}
              />
            ))}
          </ul>
          <input
            type="text"
            onChange={this.handleChangeToDoItem}
            value={this.state.newToDoItem}
            onKeyDown={this.handleKeyDown}
          ></input>
          <button className="addButton" onClick={this.handleAddNewToDoItem}>
            Add New ToDo
          </button>
        </div>
      </>
    );
  }
}
export default ToDoList;
