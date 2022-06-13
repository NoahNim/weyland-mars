import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormLabel,
  Textarea,
  Input,
  Button,
  Box,
  useDisclosure,
  Form,
  FormControl,
} from "@chakra-ui/react";
import { useState } from "react";

const CreateMessage = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [to, setTo] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const toChange = (event) => {
    setTo(event.target.value);
  };

  const titleChange = (event) => {
    setTitle(event.target.value);
  };

  const messageChange = (event) => {
    setMessage(event.target.value);
  };

  const submitMessageHandler = (event) => {
    event.preventDefault();

    const MessageData = {
      id: Math.random(),
      date: new Date(),
      to: to,
      from: "Keiser Fermente",
      title: title,
      message: message,
    };

    props.addMessages(MessageData);

    setTo("");
    setTitle("");
    setMessage("");
  };

  return (
    <Box>
      <Button onClick={onOpen}>New Message</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>New Message</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={submitMessageHandler}>
              <FormControl>
                <FormLabel>To:</FormLabel>
                <Input placeholder="name" value={to} onChange={toChange} />
                <FormLabel>Title:</FormLabel>
                <Input
                  placeholder="title"
                  value={title}
                  onChange={titleChange}
                />
                <Textarea
                  placeholder="Type up a nice message"
                  value={message}
                  onChange={messageChange}
                />
              </FormControl>
              <Button type="submit">Submit</Button>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default CreateMessage;
