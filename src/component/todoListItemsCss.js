// using styled component library to handle css in ract app without overalapping css files
import { styled } from "styled-components";

// todo list item body
export const TodoListItemsBody = styled.div`
  padding: 20px;
  width: 60%;
  background: antiquewhite;
  border-radius: 20px;
`;

// styling for task to delete All completed task and complete all task button
export const Task = styled.div`
  display: flex;
  justify-content: space-between;
  div {
    display: flex;
    cursor: pointer;
    img {
      width: 40px;
      height: 40px;
    }
    h4 {
      margin-top: 10px;
    }
  }
`;

export const TodoListData = styled.div`
  display: flex;
  justify-content: space-between;
  &:hover {
    background-color: #db9dadab;
  }
`;

// todo list content
export const Todos = styled.div`
  width: 75%;
  display: flex;
  align-items: center;
  input {
    width: 20px;
    height: 20px;
  }
  p {
    color: black;
    font-size: 1.1rem;
    margin-left: 10px;
    text-decoration: ${(props) => (props.isCompleted ? "line-through" : "")};
    opacity: ${(props) => (props.isCompleted ? 0.4 : "")};
  }
`;

//modify to content
export const ModifyTodos = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  img {
    width: 22%;
    cursor: pointer;
  }
`;
