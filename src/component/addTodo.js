import { useState, useEffect } from "react";
import { TodoListBody } from "./addTodoCss";

function AddTodo(props) {
  const [todoValue, setTodoValue] = useState("");
  const { todoItems, addTodo, update, TodoData } = props;

  useEffect(() => {
    if (TodoData != "") {
      setTodoValue(TodoData.title);
    }
  }, [TodoData]);

  function handleSubmit(event) {
    event.preventDefault(); // Make sure to prevent the default form submission

    if (TodoData == "") {
      const todo = {
        id: todoItems.length + 1,
        title: todoValue,
        completed: false,
      };

      addTodo(todo);
    } else {
      update(todoValue);
    }
    setTodoValue("");
  }

  return (
    <>
      <div style={{ display: "flex", padding: 10, justifyContent: "center" }}>
        <TodoListBody>
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
