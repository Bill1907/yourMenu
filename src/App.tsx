import { FunctionComponent } from "react";
import styled from "@emotion/styled";
import Card from "./components/Card";
import GlobalStyle from "./components/Common/GlobalStyle";

const MainContainer = styled.main`
  width: 100%;
  height: 100vh;
  background-color: #242424;
  display: flex;
  justify-content: center;
  align-items: center;
`

const App: FunctionComponent = () => {
  // TODO content wrapper를 만들고 그 안에서 콘텐츠 넘기는 기능 추가
  return (
    <MainContainer>
      <Card>
        CardContent
      </Card>
      <GlobalStyle />
    </MainContainer>
  )
};

export default App;