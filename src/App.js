import styled from 'styled-components';
import { ScoreProvider } from './context/Score/Score';
import Header from './components/Header/Header';
import Game from './components/Game/Game';
import Styles from './components/Styles/Styles';

const Container = styled.div`
  max-width: 960px;
  margin: auto;
`;

function App() {
  return (
    <ScoreProvider>
      <Styles />
      <Container>
        <Header />
        <Game />
      </Container>
    </ScoreProvider>
  );
}

export default App;
