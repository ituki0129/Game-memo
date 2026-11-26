import { useState } from "react";
import TaskInput from "./TaskInput";
import SaveButton from "./SaveButton";
import DeleteButton from "./DeleteButton";
import TaskDisplay from "./TaskDisplay";

function App() {
  const [inputTask, setInputTask] = useState("");

  const [savedTask, setSavedTask] = useState(
    localStorage.getItem("task") || ""
  );

  const saveTask = () => {
    localStorage.setItem("task", inputTask);
    setSavedTask(inputTask);
    setInputTask("");
  };

  const deleteTask = () => {
    localStorage.removeItem("task");
    setSavedTask("");
  };

  return (
    <div>
      <h1>予定入力</h1>

      <TaskInput
        value={inputTask}
        onChange={setInputTask}
      />

      <SaveButton
        onClick={saveTask}
      />

      <DeleteButton
        onClick={deleteTask}
      />

      <TaskDisplay
        task={savedTask}
      />
    </div>
  );
}

export default App;