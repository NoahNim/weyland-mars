import { Box, List, ListItem } from "@chakra-ui/react";
import React, { useState } from "react";
import Message from "./Message";

const MessageList = (props) => {
  const [messages, setMessages] = useState(props.messages);

  return (
    <Box>
      <List>
        {messages.map((message) => (
          <ListItem key={message.id} margin="8px">
            <Message message={message} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default MessageList;
