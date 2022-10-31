import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./indexNavBar.css";

const NavBar = () => {
  const navigate = useNavigate();
  const [edit, setEdit] = useState("visible");
  const [home, setHome] = useState("hidden");

  const hideButton = () => {
    if (edit == "visible") {
      setEdit("hidden");
      setHome("visible");
      navigate("/EditPage");
    }
  };
  const showButton = () => {
    setEdit("visible");
    setHome("hidden");
    navigate("/");
  };
  return (
    <div className="navbar">
      <button
        className="link_btn_home"
        onClick={showButton}
        style={{ visibility: home, color: "white" }}
      >
        Home
      </button>
      <button
        className="link_btn_edit"
        onClick={hideButton}
        style={{ visibility: edit, color: "white" }}
      >
        EditPage
      </button>
    </div>
  );
};

export default NavBar;
