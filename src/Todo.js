import React from "react";

function Todo(props) {
  return (
    <li style={listStyles.list}>
      <div>
        <input
          style={listStyles.checkBoxes}
          type="checkbox"
          checked={props.todo.completed}
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
    </li>
  );
}

export default Todo;

const listStyles = {
  list: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid #8e7dbe",
    marginBottom: "1rem",
    marginRight: "8rem",
    marginLeft: "8rem",
    borderRadius: "5rem",
    boxShadow: "0 .2rem .5rem 0 #8e7dbe",
  },
  checkBoxes: {
    display: "flex",
    flexDirection: "row",
    margin: ".5rem",
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
