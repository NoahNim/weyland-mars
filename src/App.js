import "./App.css";
import { users, files, important, messages, logs } from "./Data";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Welcome from "./components/WelcomePage/Welcome";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login user={users} />} />
        <Route path="welcome-page" element={<Welcome newsfeed={important} />} />
      </Routes>
    </div>
  );
}

export default App;
