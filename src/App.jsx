import './App.css';
import styled from "styled-components";
import { Card } from "./pages/card.jsx";


const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function App() {
  return (
    <AppContainer>
      <Card />
    </AppContainer>
  );
}

export default App;
