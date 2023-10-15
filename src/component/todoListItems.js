import { useState } from "react";
// import styling using styled components
import {
  TodoListItemsBody,
  Task,
  TodoListData,
  Todos,
  ModifyTodos,
} from "./todoListItemsCss";

function TodoListItems(props) {
  const { todoItems } = props;

  // checkbox change function
  const handleCheckboxChange = (itm) => {
    props.updateTask(itm);
  };

  return (
    <>
      <div style={{ display: "flex", padding: 10, justifyContent: "center" }}>
        <TodoListItemsBody>
          <Task>
            {/* on action the modifyTodo function perform different action D = Delete, U = Update, DC = Delete Completed, CA = Complete All */}
            <div onClick={() => props.modifyTodo("CA", [])}>
              <img
                src="https://cdn-icons-png.flaticon.com/128/5290/5290058.png"
                alt="complete all task"
              />
              <h4>Complete All Task</h4>
            </div>
            <div onClick={() => props.modifyTodo("DC", [])}>
              <img
                src="https://cdn-icons-png.flaticon.com/128/7235/7235556.png"
                alt="Delete Comp task"
              />
              <h4>Delete Comp Tasks</h4>
            </div>
          </Task>
          {todoItems.map((itm) => (
            <TodoListData key={itm.id}>
              <Todos isCompleted={itm.completed}>
                <input
                  type="checkbox"
                  checked={itm.completed ? true : false}
                  onChange={() => handleCheckboxChange(itm)}
                />
                <p>{itm.title}</p>
              </Todos>
              {/* modify todo by deleting or updating the todo list */}
              <ModifyTodos>
                <img
                  src="https://cdn-icons-png.flaticon.com/128/2853/2853458.png"
                  alt="update Todo"
                  onClick={() => props.modifyTodo("U", itm)}
                />
                <img
                  src="https://cdn-icons-png.flaticon.com/128/216/216658.png"
                  alt="Delete Todo"
                  onClick={() => props.modifyTodo("D", itm)}
                />
              </ModifyTodos>
            </TodoListData>
          ))}
        </TodoListItemsBody>
      </div>
    </>
  );
}

export default TodoListItems;
