import { Link } from "react-router-dom";
import { UnlockIcon } from "@chakra-ui/icons";
import {
  List,
  ListItem,
  ListIcon,
  Square,
  Center,
  Box,
} from "@chakra-ui/react";

const Login = (props) => {
  return (
    <Box>
      <Center>
        <Square
          size="200px"
          bg={props.colorMode === "light" ? "lightyellow" : "rgb(124, 156, 55)"}
          color={props.colorMode === "light" ? "black" : "white"}
          h="150px"
          w="200px"
          margin="200px"
          borderRadius="6px"
        >
          <List>
            <Center>
              {props.user.map((user) => (
                <div key={user.id}>
                  <ListItem>
                    <h2>Face Scan Complete.....</h2>
                  </ListItem>
                  <ListIcon>
                    <h3>User Verified</h3>
                  </ListIcon>
                  <ListItem>
                    <h4>Welcome {user.name}</h4>
                  </ListItem>
                </div>
              ))}
            </Center>
            <Center>
              <Link to="/welcome-page">
                <UnlockIcon></UnlockIcon>
              </Link>
            </Center>
          </List>
        </Square>
      </Center>
    </Box>
  );
};

export default Login;
