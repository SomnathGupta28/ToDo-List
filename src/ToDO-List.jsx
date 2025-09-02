import { useState } from "react"

export default function ToDoList() {
    let [todos, setTodos] = useState([]);   // start with empty list
    let [newTodo, setNewTodo] = useState("");

    let addNewtask = () => {
        if (newTodo.trim() === "") return; // prevent empty tasks
        setTodos([...todos, newTodo]);
        setNewTodo("");
    };

    let updatetodoValue = (event) => {
        setNewTodo(event.target.value);
    };

    let removeTask = (index) => {
        setTodos(todos.filter((_, i) => i !== index));
    };

    return (
       <div className="todo-container">
  <input 
    placeholder="Enter Your task" 
    value={newTodo} 
    onChange={updatetodoValue} 
  />
  <button onClick={addNewtask}>Add</button>
  <h1>ToDo List</h1>

  <ul>
    {todos.map((todo, index) => (
      <li key={index}>
        {todo}
        <button onClick={() => removeTask(index)}>Done</button>
      </li>
    ))}
  </ul>
</div>

    );
}
