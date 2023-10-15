import { useState, useEffect } from "react";
import AddTodo from "./component/addTodo";
import TodoListItems from "./component/todoListItems";
import { GetTodoData } from "./component/todoApiCall/getTodoData";

function App() {
  const [TodoList, SetTodoList] = useState([]);
  const [updateTodo, setUpdateTodo] = useState("");

  useEffect(() => {
    async function fetchData() {
      const GetTodos = await GetTodoData();
      SetTodoList(GetTodos);
    }
    fetchData();
  }, []);

  const addNewTodo = (data) => {
    console.log(data);
    SetTodoList([data, ...TodoList]);
  };

  const updateTodoData = (data) => {
    const updatedData = TodoList.filter((itm) => {
      if (itm.id === updateTodo.id) {
        itm["title"] = data;
      }
      return itm;
    });
    SetTodoList(updatedData);
    setUpdateTodo("");
  };

  const completedTaskHandler = (data) => {
    const updatedTask = TodoList.filter((itm) => {
      if (itm.id === data.id) {
        itm["completed"] = !itm.completed;
      }
      return itm;
    });
    SetTodoList(updatedTask);
  };

  const modifyTodoList = (action, data) => {
    console.log(action, data);

    if (action === "D") {
      const delTodo = TodoList.filter((itm) => itm.id !== data.id);
      SetTodoList(delTodo);
    } else if (action === "U") {
      setUpdateTodo(data);
    } else if (action == "DC") {
      const DeleteCompletedTask = TodoList.filter(
        (itm) => itm.completed === false
      );
      SetTodoList(DeleteCompletedTask);
    } else {
      const completeAllTask = TodoList.map((obj) => {
        return {
          ...obj, // Copy the existing object properties
          completed: true, // Update the completed property
        };
      });
      SetTodoList(completeAllTask);
    }
  };

  return (
    <div className="App">
      <AddTodo
        addTodo={addNewTodo}
        todoItems={TodoList}
        update={updateTodoData}
        TodoData={updateTodo}
      />
      <TodoListItems
        todoItems={TodoList}
        modifyTodo={modifyTodoList}
        updateTask={completedTaskHandler}
      />
    </div>
  );
}

export default App;
