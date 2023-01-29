import { FunctionComponent, ReactElement, useState } from "react";
import styled from "@emotion/styled";
import Card from "./components/Card";
import GlobalStyle from "./components/Common/GlobalStyle";
import RadioInput from "./components/Input/RadioInput";
import RangeInput from "./components/Input/RangeInput";

interface mapType {
  [index: number]: ReactElement;
}

const MainContainer = styled.main`
  width: 100%;
  height: 100vh;
  background-color: #242424;
  display: flex;
  justify-content: center;
  align-items: center;
`

const renderingContentMap : mapType= {
  0: <RadioInput></RadioInput>,
  1: <RangeInput></RangeInput>
}

const App: FunctionComponent = () => {
  const [phase, setPhase] = useState<number>(0);

  const onClickNext = ():void => setPhase(phase + 1);
  
  return (
    <MainContainer>
      <Card>
        {renderingContentMap[phase]}
        <button onClick={onClickNext}>next</button>
      </Card>
      <GlobalStyle />
    </MainContainer>
  )
};

export default App;