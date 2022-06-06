import { Grid, GridItem, Box } from "@chakra-ui/react";
import Header from "../Header/Header";

const Welcome = (props) => {
  return (
    <Box>
      <Grid
        templateAreas={`"header header"
                  "nav main"`}
        gridTemplateRows={"50px 1fr 30px"}
        gridTemplateColumns={"150px 1fr"}
        h="939px"
        gap="1"
        color={props.color === "light" ? "black" : "white"}
        fontWeight="bold"
        max-width="1200px"
        margin="0 auto"
        w="99%"
      >
        <Header
          colorMode={props.colorMode}
          toggleColorMode={props.toggleColorMode}
        />
        <GridItem
          pl="2"
          w="95%"
          h="100%"
          bg={
            props.colorMode === "light"
              ? "rgb(210, 219, 144)"
              : "rgb(124, 156, 55)"
          }
          area={"nav"}
        />
        <GridItem
          pl="2"
          w="99%"
          h="100%"
          bg={
            props.colorMode === "light"
              ? "rgb(210, 219, 144)"
              : "rgb(124, 156, 55)"
          }
          area={"main"}
        />
      </Grid>
    </Box>
  );
};

export default Welcome;
