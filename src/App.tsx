import styled from "@emotion/styled";

const MainContainer = styled.main`
  width: 100%;
  height: 100vh;
  background-color: #242424;
  display: flex;
  justify-content: center;
  align-items: center;
`

const App = () => {
  return (
    <MainContainer>
      Hello world
    </MainContainer>
  )
};

export default App;