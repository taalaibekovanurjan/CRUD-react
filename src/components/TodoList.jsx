import axios from "axios";
import React, { useEffect, useState } from "react";
import { API } from "../helpers/const";
import TodoCard from "./TodoCard";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const getTodos = async () => {
    const { data } = await axios(API);
    setTodos(data);
  };
  useEffect(() => {
    getTodos();
  }, []);
  return (
    <div>
      {todos.map((elem) => (
        <TodoCard key={elem.id} {...elem} getTodos={getTodos} />
      ))}
    </div>
  );
};

export default TodoList;
