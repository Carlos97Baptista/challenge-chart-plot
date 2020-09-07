import React from "react";
import styled from "styled-components";
import { Colors } from "../../../Utils/Themes";

export default function Header() {
  return (
    <StyledDiv>
      <div className="Header">
        <span className="Title">Carlos` Challenge</span>
      </div>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  .Header {
    background-color: ${Colors.gray};
    display: flex;
    align-items: center;
    padding: 15px 20px;
  }

  .Title {
    color: #232b34;
    font-size: 22px;
    font-weight: 500;
  }
`;
