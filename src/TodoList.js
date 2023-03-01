import React, { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setTodos([...todos, { text }]);
    setText("");
  }

  function handleDelete(index) {
    setTodos(todos.filter((_, i) => i !== index));
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
        <button>Add Todo</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo.text}{" "}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
