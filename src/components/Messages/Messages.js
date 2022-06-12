import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerFooter,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import MessageList from "./MessageList";
import CreateMessage from "./CreateMessage";

const Messages = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
      <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
        Messages
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Here are your messages</DrawerHeader>
          <DrawerBody>
            <MessageList messages={props.messages} user={props.user} />
          </DrawerBody>
          <DrawerFooter>
            <CreateMessage
              messages={props.messages}
              addMessages={props.addMessages}
            />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Messages;
