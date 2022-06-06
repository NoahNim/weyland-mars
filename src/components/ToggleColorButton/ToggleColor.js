import { Button, useColorMode } from "@chakra-ui/react";

const ToggleColor = (props) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button
      size="small"
      color={colorMode === "light" ? "black" : "white"}
      onClick={props.toggleColorMode}
    >
      Toggle {colorMode === "light" ? "Dark" : "Light"}
    </Button>
  );
};

export default ToggleColor;
