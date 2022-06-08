import { Box, List, ListItem } from "@chakra-ui/react";
import React, { useState } from "react";
import Message from "./Message";

const MessageList = (props) => {
  return (
    <Box>
      {props.messages.map((message) => (
        <List>
          <ListItem>{message.title}</ListItem>
          <ListItem>
            <Message />
          </ListItem>
        </List>
      ))}
    </Box>
  );
};

export default MessageList;
