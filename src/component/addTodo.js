// import useState and useEffect hooks from react to handle state of todo
import { useState, useEffect } from "react";
import { TodoListBody } from "./addTodoCss";
import { AddNewTodoData, UpdateTodoData } from "./todoApiCall/getTodoData";

function AddTodo(props) {
  const [todoValue, setTodoValue] = useState("");
  // getting props from and using object destructuring
  const { todoItems, addTodo, update, TodoData } = props;

  // using useEffect hook which will work every time there is a change of state for the todo value
  // if a todoList data to be updated
  useEffect(() => {
    if (TodoData != "") {
      setTodoValue(TodoData.title);
    }
  }, [TodoData]);

  // function to be work whne user tries to add new todo or modify existing todo
  async function handleSubmit(event) {
    event.preventDefault(); // prevent the default form submission

    if (TodoData == "") {
      const todo = {
        id: todoItems.length + 1,
        title: todoValue,
        completed: false,
      };

      const AddNewTodo = await AddNewTodoData(todo);
      console.log("AddNewTodo", AddNewTodo);
      addTodo(AddNewTodo);
    } else {
      update(todoValue);
      const updateTodo = await UpdateTodoData(todoValue);
    }
    setTodoValue("");
  }

  return (
    <>
      <div style={{ display: "flex", padding: 10, justifyContent: "center" }}>
        <TodoListBody>
          {/* handle new addition of a todo or modification of a todo */}
          <form onSubmit={handleSubmit}>
            <input
              value={todoValue}
              type="text"
              onChange={(e) => setTodoValue(e.target.value)}
              placeholder="Add your todo"
            />
            <button type="submit">
              {TodoData == "" ? "Submit" : "Update"}
            </button>
          </form>
        </TodoListBody>
      </div>
    </>
  );
}

export default AddTodo;
