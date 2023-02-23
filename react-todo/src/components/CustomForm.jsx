import { useState } from "react";
//lybrary inputs
import { PlusIcon } from "@heroicons/react/24/solid";
export const CustomForm = ({addTask}) => {
  const [task, setTask] = useState("");
  const handleFormSubmit = (e) => {
    e.preventDefault();
    addTask({
        name: task,
        checked: false,
        id: Date.now()
    })
    setTask("");
  };
  return (
    <form action="" className="todo" onSubmit={handleFormSubmit}>
      <div className="wrapper">
        <input
          type="text"
          id="task"
          className="input"
          value={task}
          onInput={(e) => setTask(e.target.value)}
          required
          autoFocus
          maxLength={60}
          placeholder="Enter Task"
        />
        <label htmlFor="task" className="label">
          Enter Task
        </label>
      </div>
      <button className="btn" aria-label="Add task" type="submit">
        <PlusIcon />
      </button>
    </form>
  );
};
