import { users, files, important, logs, messages } from "./Data";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Welcome from "./components/WelcomePage/Welcome";
import { Box, useColorMode } from "@chakra-ui/react";
import { useState } from "react";

// let messages = [
//   {
//     id: 1,
//     sentDate: new Date(2515, 3, 9),
//     from: "Adin Vicharky",
//     to: "Kaiser Fermente",
//     title: "Welcome to the Lab",
//     message: "Lorem ipsum",
//   },
//   {
//     id: 2,
//     sentDate: new Date(2515, 3, 10),
//     from: "Dr. Veronica Alvarez",
//     to: "Dr. Kaiser Fermente",
//     title: "Mental Health of Workers Report",
//     message: "Lorem ipsum",
//   },
//   {
//     id: 3,
//     sentDate: new Date(2515, 4, 5),
//     from: "Dr. Chazz McFazzer",
//     to: "Kaiser Fermente",
//     title: "Effects from the Artifact",
//     message: "Lorem ipsum",
//   },
// ];

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const [messageList, setMessageList] = useState(messages);

  const addMessages = (messages) => {
    setMessageList((prevMessages) => {
      return [messages, ...prevMessages];
    });
  };
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
              messages={messageList}
              addMessages={addMessages}
              logs={logs}
              colorMode={colorMode}
              toggleColorMode={toggleColorMode}
              user={users}
            />
          }
          exact
        />
      </Routes>
    </Box>
  );
}

export default App;
