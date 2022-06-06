import { List } from "@chakra-ui/react";
import InformationDate from "./InformationDate";

const Bulletin = (props) => {
  return (
    <List>
      <InformationDate date={props.date} />
    </List>
  );
};

export default Bulletin;
