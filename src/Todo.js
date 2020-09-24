import React from "react";

function Todo(props) {
  const handleDeleteNewToDoItem = () => props.onDeleteItem(props.todo.id);
  const handleCheckedToDoItem = () => props.onCheckedTodo(props.todo.id);
  return (
    <li key={props.todo.id} style={listStyles.list}>
      <div>
        <input
          style={listStyles.checkBoxes}
          type="checkbox"
          defaultChecked={props.todo.completed}
          onChange={handleCheckedToDoItem}
        />
      </div>

      <div
        style={
          props.todo.completed
            ? listStyles.toDoCompleted
            : listStyles.toDoDescription
        }
      >
        <span className="ToDo">{props.todo.description}</span>
      </div>
      <span>
        <button className="delete_button" onClick={handleDeleteNewToDoItem}>
          x
        </button>
      </span>
    </li>
  );
}

export default Todo;

const listStyles = {
  list: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid #8e7dbe",
    marginBottom: "1rem",
    borderRadius: "5rem",
    boxShadow: "0 .2rem .5rem 0 #8e7dbe",
  },
  checkBoxes: {
    display: "flex",
    margin: ".7rem",
    fontSize: "11px",
  },
  toDoCompleted: {
    color: "#d8dbe2",
    textDecoration: "line-through",
  },
  toDoDescription: {
    fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
  },
};
