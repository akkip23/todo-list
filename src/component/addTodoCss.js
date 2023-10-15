import { styled } from "styled-components";

export const TodoListBody = styled.div`
  width: 60%;
  background: #874cbe;
  height: 25vh;
  border-radius: 20px;
  form {
    display: flex;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    input {
      width: 50%;
      border-radius: 50px;
      border: none;
      padding: 10px;
      font-size: 1rem;
      background: whitesmoke;
    }
    button {
      padding: 15px 40px;
      border-radius: 50px;
      border: none;
      background: #ff5945ba;
      color: white;
      font-size: 1em;
    }
  }
`;
