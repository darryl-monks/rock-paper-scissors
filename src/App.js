import Header from './components/Header/Header';
import Board from './components/Board/Board';
import { ScoreProvider } from './contexts/ScoreContext';
import { PlayerGestureProvider } from './contexts/PlayerGestureProvider';

function App() {
  return (
    <ScoreProvider>
      <Header />
      <PlayerGestureProvider>
        <Board />
      </PlayerGestureProvider>
    </ScoreProvider>
  );
}

export default App;
