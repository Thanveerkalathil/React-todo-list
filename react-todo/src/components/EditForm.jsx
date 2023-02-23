import { useEffect, useState } from "react";
//lybrary inputs
import { CheckIcon } from "@heroicons/react/24/solid";
export const EditForm = ({ editedTask, updateTask, closeEditMode }) => {
  const [UpdatedTaskName, setUpdatedTaskName] = useState(editedTask.name);
  useEffect(() => {
    const closeModalIfEscaped = (e) => {
      e.key === "Escape" && closeEditMode();
    };
    window.addEventListener("keydown", closeModalIfEscaped);
    return () => {
      window.removeEventListener("keydown", closeModalIfEscaped);
    };
  }, [closeEditMode]);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    updateTask({ ...editedTask, name: UpdatedTaskName });
  };
  return (
    <div
      role="dialog"
      aria-aria-labelledby="editTask"
      onClick={(e) => {
        e.target === e.currentTarget && closeEditMode();
      }}
    >
      <form action="" className="todo" onSubmit={handleFormSubmit}>
        <div className="wrapper">
          <input
            type="text"
            id="editTask"
            className="input"
            value={UpdatedTaskName}
            onInput={(e) => setUpdatedTaskName(e.target.value)}
            required
            autoFocus
            maxLength={60}
            placeholder="Update Task"
          />
          <label htmlFor="editTask" className="label">
            Updated Task
          </label>
        </div>
        <button
          className="btn"
          aria-label={`Confirm edited task to now read ${UpdatedTaskName}`}
          type="submit"
        >
          <CheckIcon strokeWidth={2} height={24} width={24} />
        </button>
      </form>
    </div>
  );
};
