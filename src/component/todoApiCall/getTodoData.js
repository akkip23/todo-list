//dummy data API callback from jsonplaceholder
export async function GetTodoData() {
  try {
    //fetch function component
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos?_limit=5"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export async function AddNewTodoData(AddNewtodo) {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(AddNewtodo),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

export async function UpdateTodoData(updateTodo) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${updateTodo.id}`,
      {
        method: "PUT",
        body: JSON.stringify(updateTodo),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );
    const data = await response.json();
    console.log("update todo", data);
    return data;
  } catch (error) {}
}

export async function DeleteTodoData(DeleteTodo) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${DeleteTodo.id}`,
      {
        method: "DELETE",
      }
    );
    const data = await response.json();
    console.log("delete todo", data);
  } catch (error) {}
}
