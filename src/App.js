//import useState, useEffect hook from react
import { useState, useEffect } from "react";
// AddTodo component
import AddTodo from "./component/addTodo";
// list item component show all added todo in a list
import TodoListItems from "./component/todoListItems";
//get todo dummy data from API
import {
  GetTodoData,
  DeleteTodoData,
} from "./component/todoApiCall/getTodoData";

function App() {
  // useState hook to set and update list
  const [TodoList, SetTodoList] = useState([]);
  const [updateTodo, setUpdateTodo] = useState("");

  // useEffect hook used to run on every render of app to get data from the api and set it to todo list
  useEffect(() => {
    async function fetchData() {
      const GetTodos = await GetTodoData();
      SetTodoList(GetTodos);
    }
    fetchData();
  }, []);

  // function to add new todo to the top of the list
  const addNewTodo = (data) => {
    console.log(data);
    SetTodoList([data, ...TodoList]);
  };

  //function to update the existing todo list data
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

  //todo completed task handler to mark to do as complete
  const completedTaskHandler = (data) => {
    const updatedTask = TodoList.filter((itm) => {
      if (itm.id === data.id) {
        itm["completed"] = !itm.completed;
      }
      return itm;
    });
    SetTodoList(updatedTask);
  };

  //function to modify to by the action provided by the user such as D = Delete, U = Update, DC = Delete Completed, CA = Complete All
  const modifyTodoList = (action, data) => {
    console.log(action, data);

    if (action === "D") {
      // filter out the data which does not have id given or selected todo to delete
      const delTodo = TodoList.filter((itm) => itm.id !== data.id);
      DeleteTodoData(TodoList);
      //to  set filtered to todo list
      SetTodoList(delTodo);
    } else if (action === "U") {
      setUpdateTodo(data);
    } else if (action == "DC") {
      // to remove completed task from the list
      const DeleteCompletedTask = TodoList.filter(
        (itm) => itm.completed === false
      );
      SetTodoList(DeleteCompletedTask);
    } else {
      //complete all task in the list
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
      {/* to do list component */}
      <AddTodo
        addTodo={addNewTodo}
        todoItems={TodoList}
        update={updateTodoData}
        TodoData={updateTodo}
      />
      {/* Todo list item Component */}
      <TodoListItems
        todoItems={TodoList}
        modifyTodo={modifyTodoList}
        updateTask={completedTaskHandler}
      />
    </div>
  );
}

export default App;
