import React from "react";
import styled from "styled-components";
import { Colors } from "../../../Utils/Themes";
import { Button } from "../index";

export default function Footer() {
  return (
    <StyledDiv>
      <div className="Footer">
        <Button />
      </div>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  .Footer {
    background-color: ${Colors.gray};
    display: flex;
    align-items: center;
    padding: 15px 20px;
    position: relative;
    bottom: 0;
    left: 0;
  }

  .Title {
    color: #232b34;
    font-size: 22px;
    font-weight: 500;
  }
`;
