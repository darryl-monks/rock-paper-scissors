import { ScoreProvider } from './context/Score/Score';
import Header from './components/Header/Header';
import Game from './components/Game/Game';

function App() {
  return (
    <ScoreProvider>
      <Header />
      <Game />
    </ScoreProvider>
  );
}

export default App;
