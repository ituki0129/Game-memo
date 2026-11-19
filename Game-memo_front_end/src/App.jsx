import { useState } from "react";
import InputTask from "./InputTask";
import SaveButton from "./SaveButton";
import DisplayTask from "./DisplayTask";

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

  return (
    <div>
      <h1>予定入力</h1>

      <InputTask
        value={inputTask}
        onChange={setInputTask}
      />

      <SaveButton
        onClick={saveTask}
      />

      <DisplayTask
        task={savedTask}
      />
    </div>
  );
}

export default App;