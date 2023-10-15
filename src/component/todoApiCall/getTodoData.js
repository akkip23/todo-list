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
