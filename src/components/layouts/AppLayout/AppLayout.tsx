import React from "react";
import styled from "styled-components";

const RootLayout = styled.div`
  height: 100%;
  display: flex;
`

const LeftSection = styled.div`


`;

const MainSection = styled.div`


`;

const RightSection = styled.div`


`;

const AppLayout = () => (
  <RootLayout>
    <LeftSection>
      <div className="hold-container"></div>
      <div className="score-container"></div>
    </LeftSection>
    <MainSection>
      <div className="tetris-container"></div>
    </MainSection>
    <RightSection>
      <div className="next-block-container"></div>
    </RightSection>
  </RootLayout>
);

export default AppLayout;
