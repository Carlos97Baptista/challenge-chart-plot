import React from "react";
import { Header, Chart, InputArea, Footer } from "../../Components";
import styled from "styled-components";
export default function Home() {
  return (
    <StyledDiv>
      <Header />
      <div className="Middle">
        <InputArea />
        <Chart />
      </div>
      <Footer />
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  .Middle {
    flex: 1;
    overflow: hidden;
  }
`;
