import { Box, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "../helpers/const";

const AddTodo = () => {
  const [author, setAuthor] = useState("");
  const [info, setInfo] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();
  const handleClick = () => {
    if (!author || !info || !image) {
      alert("Error! Pls Add information");
      return;
    }
    let newTodo = {
      todoAuthor: author,
      todoInfo: info,
      todoImage: image,
    };
    addTodo(newTodo);
    navigate("/todos");
  };
  const addTodo = async (todo) => {
    await axios.post(API, todo);
  };

  return (
    <div>
      <Box
        className="box"
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          onChange={(e) => setAuthor(e.target.value)}
          id="outlined-multiline-flexible"
          label="Add name of author"
          multiline
          maxRows={4}
        />
        <TextField
          onChange={(e) => setInfo(e.target.value)}
          id="outlined-multiline-static"
          label="Add info about author"
          multiline
          rows={4}
          de
          faultValue="Default Value"
        />
        <TextField
          onChange={(e) => setImage(e.target.value)}
          id="outlined-basic"
          label="Please add url of image"
          variant="outlined"
        />{" "}
        <button
          onClick={handleClick}
          type="button"
          class="btn btn-secondary btn-lg"
        >
          Add to todos
        </button>
      </Box>
    </div>
  );
};

export default AddTodo;
