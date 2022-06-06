import { users, files, important, messages, logs } from "./Data";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Welcome from "./components/WelcomePage/Welcome";
// import { Box } from "@chakra-ui/react";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login user={users} />} />
      <Route
        path="welcome-page"
        element={<Welcome newsfeed={important} />}
        exact
      />
    </Routes>
  );
}

export default App;
