import { Box, List, ListItem } from "@chakra-ui/react";
import React, { useState } from "react";
import Message from "./Message";

const MessageList = (props) => {
  return (
    <Box>
      <List>
        {props.messages.map((message) => (
          <ListItem margin="8px">
            <Message key={message.id} message={message} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default MessageList;
