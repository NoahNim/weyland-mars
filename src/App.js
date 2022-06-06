import { users, files, important, messages, logs } from "./Data";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Welcome from "./components/WelcomePage/Welcome";
import { Box, color, GridItem, useColorMode } from "@chakra-ui/react";
import Header from "./components/Header/Header";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box>
      <Routes>
        <Route
          path="/"
          element={<Login user={users} colorMode={colorMode} />}
        />
        <Route
          path="welcome-page"
          element={
            <Welcome
              important={important}
              files={files}
              messages={messages}
              logs={logs}
              colorMode={colorMode}
              toggleColorMode={toggleColorMode}
            />
          }
          exact
        />
      </Routes>
    </Box>
  );
}

export default App;
