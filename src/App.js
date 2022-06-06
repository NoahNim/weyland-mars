import { users, files, important, messages, logs } from "./Data";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Welcome from "./components/WelcomePage/Welcome";
import { Box, GridItem, useColorMode } from "@chakra-ui/react";
import ToggleColor from "./components/ToggleColorButton/ToggleColor";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box>
      <GridItem alignItems="center" area={"header"} w="100%">
        <ToggleColor
          color={colorMode}
          toggleColor={toggleColorMode}
          alignItems="center"
        />
      </GridItem>
      <Routes>
        <Route path="/" element={<Login user={users} />} />
        <Route
          path="welcome-page"
          element={<Welcome newsfeed={important} color={colorMode} />}
          exact
        />
      </Routes>
    </Box>
  );
}

export default App;
