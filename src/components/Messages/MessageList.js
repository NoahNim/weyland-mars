import { Box, List, ListItem } from "@chakra-ui/react";
import React, { useState } from "react";
import Message from "./Message";
import CreateMessage from "./CreateMessage";

const MessageList = (props) => {
  return (
    <Box>
      <List>
        {props.messages.map((message) => (
          <ListItem key={message.id} margin="8px">
            <Message message={message} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default MessageList;
