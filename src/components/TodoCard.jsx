import React from "react";
import axios from "axios";
import { API } from "../helpers/const";
import Button from "@mui/material/Button";

const TodoCard = ({ todoAuthor, todoInfo, todoImage, id, getTodos }) => {
  const deleteTodo = async (id) => {
    await axios.delete(`${API}/${id}`);
    getTodos();
  };

  const editTodo = (id) => {
    console.log(`${id}`);
  };

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        margin: "10px",
        borderRadius: "5px",
      }}
    >
      <h3>{todoAuthor}</h3>
      <form className="todo">
        <input type="text" value={todoAuthor} readOnly />
        <input type="text" value={todoInfo} readOnly />
        <input type="text" value={todoImage} readOnly />
        <Button onClick={() => deleteTodo(id)} variant="outlined" color="error">
          Delete
        </Button>
        <Button onClick={() => editTodo(id)} variant="outlined" color="primary">
          Edit
        </Button>
      </form>
    </div>
  );
};

export default TodoCard;
