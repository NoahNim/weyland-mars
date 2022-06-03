import logo from "./logo.svg";
import "./App.css";
import { users, files, important, messages, logs } from "./Data";

function App() {
  return (
    <div className="App">
      <h1>{users[0].name}</h1>
    </div>
  );
}

export default App;
