import React from "react";
import styled from "styled-components";

import GlobalStyle from "./styles/global";

import UISessionCounter from "./components/UISessionCounter/index";
import UISessionTimer from "./components/UISessionTimer/index";

import { TomatoContextProvider } from "./context/TomatoContext";

const AppWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AppCard = styled.div`
  width: fit-content;
  height: fit-content;
  padding: 25px 35px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  background: #fff;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <TomatoContextProvider>
        <AppWrapper>
          <AppCard>
            <UISessionTimer />
            <UISessionCounter />
          </AppCard>
        </AppWrapper>
      </TomatoContextProvider>
    </>
  );
}

export default App;
