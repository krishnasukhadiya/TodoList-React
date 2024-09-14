import { useState } from "react";
import "./App.css";
import InputComp from "./components/InputComp";
import TodoListComp from "./components/TodoListComp";
function App() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  function writeTodo(e) {
    setInputValue(e.target.value);
  }
  function addTodo() {
    if (inputValue != "") {
      setTodos((prevTodos) => [...prevTodos, inputValue]);
      setInputValue("");
    }
  }
  function deleteTodo(todoIndex) {
    setTodos((todos) =>
      todos.filter((todo, prevtodoIndex) => {
        return prevtodoIndex != todoIndex;
      })
    );
  }
  console.log(todos);

  return (
    <main>
      <h1>Todo List</h1>
      <InputComp
        inputValue={inputValue}
        writeTodo={writeTodo}
        addTodo={addTodo}
      />
      <TodoListComp todos={todos} deleteTodo={deleteTodo} />
    </main>
  );
}

export default App;
