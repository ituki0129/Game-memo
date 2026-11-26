import { useState } from "react";

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

      <input
        type="text"
        value={inputTask}
        onChange={(e) => setInputTask(e.target.value)}
        placeholder="予定を入力"
      />

      <button onClick={saveTask}>
        保存
      </button>

      <button onClick={deleteTask}>
        削除
      </button>

      <p>現在の予定: {savedTask}</p>
    </div>
  );
}

export default App;