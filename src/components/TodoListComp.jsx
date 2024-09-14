import React from "react";
import TodosComp from "./TodosComp";
function TodoListComp({ todos, deleteTodo }) {
  return (
    <div className="container">
      {todos.map((todo, index) => {
        return <TodosComp index={index} todo={todo} deleteTodo={deleteTodo} />;
      })}
    </div>
  );
}

export default TodoListComp;
