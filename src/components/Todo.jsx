import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, switchTodo } from "../redux/modules/todos";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function Todo({ isActive }) {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const deletedBtn = (id) => {
    dispatch(deleteTodo(id));
  };
  const ToggleBtn = (id) => {
    dispatch(switchTodo(id));
  };

  return (
    <div>
      <StNamebox>{isActive ? "완료된 일" : "해야할 일"}</StNamebox>
      {todos
        .filter((todo) => {
          return todo.isDone === isActive;
        })
        .map((item) => {
          return (
            <StTodo key={item.id}>
              <h4>{item.title}</h4>
              <p>{item.content}</p>
              <button onClick={() => ToggleBtn(item.id)}>
                {isActive ? "취소" : "완료"}
              </button>
              <button
                onClick={() => {
                  deletedBtn(item.id);
                }}
              >
                삭제
              </button>
              <br />
              <button
                onClick={() => {
                  navigate(`${item.id}`);
                }}
              >
                상세페이지
              </button>
            </StTodo>
          );
        })}
    </div>
  );
}

const StNamebox = styled.div`
  height: 50px;
  background-color: aliceblue;
`;
const StTodo = styled.div`
  width: 160px;
  height: 140px;
  background-color: #abe582;
  border-radius: 10px;
  margin: 10px;
  padding: 4px;
`;

export default Todo;
