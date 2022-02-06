import { ScoreProvider } from './context/Score/Score';
import Header from './components/Header/Header';
import Game from './components/Game/Game';
import Styles from './components/Styles/Styles';

function App() {
  return (
    <ScoreProvider>
      <Styles />
      <Header />
      <Game />
    </ScoreProvider>
  );
}

export default App;
