import { Box } from "@chakra-ui/react";

const InformationDate = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <Box>
      {month} {day} {year}
    </Box>
  );
};

export default InformationDate;
