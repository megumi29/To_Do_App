import React from "react";
import AppName from "./images/AppName.png";
import avatarImg from "./images/AuntPersona.jpg";
import { Link } from "react-router-dom";

function SideBar(props) {
  return (
    <div style={navStyles.sideNavSection}>
      <img
        src={avatarImg}
        style={navStyles.userSectionImg}
        alt="users_avatar"
      ></img>
      <p style={navStyles.sideNavUserName}>{props.user.username}</p>
      <nav className="menu_list">
        <Link to="/" className="menu_list_links">
          Home
        </Link>
        {/* <li style={navStyles.navMenu}>Upcoming ToDos</li> */}
        <Link to="/ToDo" className="menu_list_links">
          Create New ToDos
        </Link>
        Log Out
        <div style={navStyles.logoImg}>
          <img src={AppName} style={navStyles.imgSize} alt="logo" />
        </div>
      </nav>
    </div>
  );
}

export default SideBar;

const navStyles = {
  sideNavSection: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: ".5rem",
    backgroundColor: "#b892ff",
    fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
    fontWeight: "bold",
  },
  sideNavUserName: {
    marginBottom: "3rem",
    color: "#ffff",
  },
  userSectionImg: {
    width: "12rem",
    borderRadius: "50%",
  },
  logoImg: {
    position: "absolute",
    bottom: "1rem",
  },
  imgSize: {
    width: "60%",
  },
};
