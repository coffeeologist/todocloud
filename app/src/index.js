import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import ToDoList from "./js/ToDoList";

var destination = document.querySelector("#container");

ReactDOM.render(
    <div>
        <ToDoList/>
    </div>,
    destination
)