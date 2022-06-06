import ToggleColor from "../ToggleColorButton/ToggleColor";
import { GridItem, Grid, Center } from "@chakra-ui/react";

const Header = (props) => {
  return (
    <GridItem
      alignItems="center"
      area={"header"}
      w="100%"
      color={props.colorMode === "light" ? "black" : "white"}
    >
      <Center>
        <ToggleColor
          colorMode={props.colorMode}
          toggleColorMode={props.toggleColorMode}
          alignItems="center"
        />
        Weyland-Yutani
      </Center>
    </GridItem>
  );
};

export default Header;
