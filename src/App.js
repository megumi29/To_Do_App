import React from "react";
import SideBar from "./Side(left) bar";
import Dashboard from "./Dashboard";
import ToDoList from "./ToDoList";
import avatarImg from "./images/AuntPersona.jpg";
import "./App.css";

import { Switch, Route } from "react-router-dom";

class App extends React.Component {
  state = {
    user: {
      username: "Jenna",
      avatarImg: avatarImg,
    },
  };

  render() {
    return (
      <div className="pageWrapper">
        {/* Todo List Section */}
        <SideBar user={this.state.user} />
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route path="/Todo">
            <ToDoList />
          </Route>
        </Switch>
      </div>
    );
  }
}
export default App;
