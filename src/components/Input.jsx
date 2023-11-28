import React, { useState } from "react";
import { useDispatch } from "react-redux";
import shortid from "shortid";
import { addTodo } from "../redux/modules/todos";
import styled from "styled-components";

function Input() {
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const dispatch = useDispatch();

  const titleOnChangeHandler = (event) => {
    setTitle(event.target.value);
  };
  const contentOnChangeHandler = (event) => {
    setContent(event.target.value);
  };
  const onChangeHandler = (e) => {
    e.preventDefault();
    const newTodo = {
      id: shortid.generate(),
      title,
      content,
      isDone: false,
    };
    dispatch(addTodo(newTodo));
  };

  return (
    <StInput onSubmit={onChangeHandler}>
      할일 : <input value={title} onChange={titleOnChangeHandler} />
      내용 : <input value={content} onChange={contentOnChangeHandler} />
      <button type="submit">등록하기</button>
    </StInput>
  );
}

const StInput = styled.form`
  height: 80px;
  background-color: #c086f6;
  display: flex;
  align-items: center;
`;

export default Input;
