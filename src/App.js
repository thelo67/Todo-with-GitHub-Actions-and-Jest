import { useState } from "react";

const App = () => {

  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if(todo !== "") {
      setTodos([...todos, todo]);
      setTodo("");
    }
  };

  return (
    <div className="App">
      <h1>React Todo App</h1>
      <div className="input-wrapper">
        <input
          type="text"
          name="todo"
          placeholder="Create a new todo"
          value={todo}
          onChange={(event) => {
            setTodo(event.target.value);
          }}
        />
        <button
          className="add-button"
          onClick={addTodo}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default App;
