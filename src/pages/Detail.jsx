import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { deleteTodo } from "../redux/modules/todos";

const Detail = () => {
  const todos = useSelector((state) => state.todos);
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const deletedBtn = (id) => {
    dispatch(deleteTodo(id));
    navigate("/");
  };

  const todo = todos.filter((todo) => {
    return todo.id === id;
  })[0];
  return (
    <div>
      <div>
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          Home
        </button>
      </div>
      <StTodo>
        제목 : {todo.title}
        <br />
        내용 : {todo.content}
        <br />
        완료여부: {String(todo.isDone)}
        <br />
        <button onClick={() => deletedBtn(todo.id)}>삭제</button>
      </StTodo>
    </div>
  );
};

const StTodo = styled.div`
  background-color: #d0ff8991;
  width: 120px;
`;

export default Detail;
