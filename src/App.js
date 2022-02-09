import styled from 'styled-components';
import { ScoreProvider } from './context/Score/Score';
import Header from './components/Header/Header';
import Game from './components/Game/Game';
import Styles from './components/Styles/Styles';

const Container = styled.div`
  padding: 2rem;
`;

const GameContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 320px;
`;

function App() {
  return (
    <ScoreProvider>
      <Styles />
      <Container>
        <Header />
        <GameContainer>
          <Game />
        </GameContainer>
      </Container>
    </ScoreProvider>
  );
}

export default App;
