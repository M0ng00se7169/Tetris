import React from "react";
import { StyledStartButton } from "./styles/StyledStartButton";

const StartButton = ({ callback }) => (
  <StyledStartButton onClick={callback}>
    <div role="button" tabIndex="0">
      Start Game
    </div>
  </StyledStartButton>
);

export default StartButton;
