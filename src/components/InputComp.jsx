import React from "react";

function InputComp({ inputValue, writeTodo, addTodo }) {
  return (
    <div className="input-container">
      <input
        type="text"
        placeholder="Enter a Task"
        value={inputValue}
        onChange={writeTodo}
      />
      <button onClick={addTodo}>+</button>
    </div>
  );
}

export default InputComp;
