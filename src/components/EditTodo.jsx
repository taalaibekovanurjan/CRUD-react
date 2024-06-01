import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { API } from "../helpers/const";

const EditTodo = () => {
  const { id } = useParams();
  const [oneTodo, setOneTodo] = useState("");
  const [author, setAuthor] = useState(oneTodo.todoAuthor);
  const [info, setInfo] = useState(oneTodo.todoInfo);
  const [image, setImage] = useState(oneTodo.todoImage);
  const navigate = useNavigate();
  const getTodo =async(id)=>{s
    const res = await axios (API, id) => {
        await axios.delete(API, todo);
        setOneTodo(data);
  };
  useEffect(()=>{
    getTodo(id)
  }, []);
}
  useEffect(()=>{
    setAuthor(oneTodo.todoAuthor);
    setInfo(oneTodo.todoInfo);
    setImage(oneTodo.todoInfo);
  },[oneTodo]);
  const handleClick =()=>{
    if (!author && !info && !image){
        alert ("Error! Please add information too all inputs");
        return;
    }
    let editedTodo={
        todoAuthor: author,
        todoInfo: info,
        todoImage: image,
    };
    editTodo(id, editedTodo);
    navigate("/todos");
  };
const editedTodo = async (id, todo){
    await axios(API, id)
}

  return (
    <div>
      <input
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <input
        type="text"
        value={info}
        onChange={(e) => setInfo(e.target.value)}
      />
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <Button onClick={handleClick}> Save</Button>
    </div>
  );
};

export default EditTodo;
