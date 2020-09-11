import React from "react";
import AppName from "./images/AppName.png";

function SideBar(props) {
  return (
    // <div style={pageContainer}>
    <div style={navStyles.sideNavSection}>
      <img
        src={props.user.avatarImg}
        style={navStyles.userSectionImg}
        alt="users_avatar"
      ></img>
      <p style={navStyles.sideNavUserName}>{props.user.username}</p>
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
    // </div>
  );
}

export default SideBar;

// const pageContainer = {};

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
