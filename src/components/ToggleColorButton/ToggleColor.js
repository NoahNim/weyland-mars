import { Button } from "@chakra-ui/react";

const ToggleColor = (props) => {
  return (
    <header>
      <Button
        size="small"
        color={props.color === "light" ? "black" : "white"}
        onClick={props.toggleColor}
      >
        Toggle {props.color === "light" ? "Dark" : "Light"}
      </Button>
    </header>
  );
};

export default ToggleColor;
