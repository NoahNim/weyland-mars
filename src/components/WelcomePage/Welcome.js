import { Grid, GridItem, Box } from "@chakra-ui/react";
import ToggleColor from "../ToggleColorButton/ToggleColor";

const Welcome = (props) => {
  return (
    <Box>
      <Grid
        templateAreas={`"header header"
                  "nav main"`}
        gridTemplateRows={"50px 1fr 30px"}
        gridTemplateColumns={"150px 1fr"}
        h="920px"
        gap="1"
        color="black"
        fontWeight="bold"
        alignItems="center"
      >
        <GridItem pl="2" bg="black" area={"header"} w="99%">
          <ToggleColor />
        </GridItem>
        <GridItem
          pl="2"
          w="95%"
          h="100%"
          bg="rgb(210, 219, 144)"
          area={"nav"}
        />
        <GridItem
          pl="2"
          w="99%"
          h="100%"
          bg="rgb(210, 219, 144)"
          area={"main"}
        />
      </Grid>
    </Box>
  );
};

export default Welcome;
