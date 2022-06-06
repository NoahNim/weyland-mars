import "./App.css";
import { users, files, important, messages, logs } from "./Data";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login user={users} />} />
      </Routes>
    </div>
  );
}

export default App;
