import { useState } from "react";
import { useEffect } from "react";
function TodoList() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;

    setTasks([...tasks, task]);
    setTask("");
  };
  return (
    <div>
      <h2>Simple Todo</h2>
      <input
        type="text"
        value={task}
        placeholder="Type name..."
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={addTask}>Add</button>
      <ul>
        {tasks.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
export default TodoList;
