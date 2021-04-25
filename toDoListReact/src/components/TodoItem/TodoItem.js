import React from "react";
import "./TodoItem.css";

function Todo(props) {
  const { content } = props;
  return <div>{content}<button className="delete" onClick={(e) => e.target.closest('li').remove()}>Delete</button> </div>;
}

export default Todo;
