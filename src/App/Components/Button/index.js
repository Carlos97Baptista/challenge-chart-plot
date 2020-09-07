import React, { useContext } from "react";
import styled from "styled-components";
import { Colors } from "../../../Utils/Themes";
import { StateContext } from "../../index";

export default function Button() {
  const stateContext = useContext(StateContext);

  return (
    <StyledButton onClick={() => stateContext.handleClick()}>
      GENERATE CHART
    </StyledButton>
  );
}

const StyledButton = styled.button`
  padding: 15px 20px;
  background-color: ${Colors.mainBlue};
  border-radius: 3px;
  color: #fff;
  border: none;
  font-size: 0.75em;
`;
