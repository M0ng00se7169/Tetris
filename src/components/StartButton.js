import React from "react";
import { StyledStartButton } from "./styles/StyledStartButton";

const StartButton = ({ callback }) => (
  <StyledStartButton 
    onClick={callback}
    role="button"
    tabIndex="0">
      Start Game
    </StyledStartButton>
);

export default StartButton;
