import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  List,
  ListItem,
} from "@chakra-ui/react";

const Message = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>{props.message.title}</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <List>
              <ListItem>{props.message.title}</ListItem>
              <ListItem>From: {props.message.from}</ListItem>
              {/* <ListItem>Date: {props.message.sentDate}</ListItem> */}
            </List>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>{props.message.message}</ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Message;
