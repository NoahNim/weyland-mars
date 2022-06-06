import { List, ListItem } from "@chakra-ui/react";
import InformationDate from "./InformationDate";

const Bulletin = (props) => {
  return (
    <List>
      <InformationDate date={props.date} />
      <ListItem>{props.from}</ListItem>
    </List>
  );
};

export default Bulletin;
