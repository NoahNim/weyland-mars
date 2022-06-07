import { List, ListItem, Box } from "@chakra-ui/react";
import InformationDate from "./InformationDate";

const Bulletin = (props) => {
  return (
    <Box>
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
