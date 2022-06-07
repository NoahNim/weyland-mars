import { List, ListItem, Box } from "@chakra-ui/react";
import InformationDate from "./InformationDate";

const Bulletin = (props) => {
  console.log(`In BULLETIN ${props.date}`);
  return (
    <Box
      bg="rgb(211, 237, 244)"
      margin="10px"
      borderRadius="6px"
      padding="5px"
      overflow="auto"
    >
      <List>
        <InformationDate date={props.date} />
        <ListItem>{props.from}</ListItem>
        <ListItem>{props.title}</ListItem>
        <ListItem>{props.content}</ListItem>
      </List>
    </Box>
  );
};

export default Bulletin;
