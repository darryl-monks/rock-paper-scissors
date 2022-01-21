import Header from './components/Header/Header';
import Board from './components/Board/Board';
import { ScoreProvider } from './contexts/ScoreContext';
import { ActiveGestureProvider } from './contexts/ActiveGestureContext';

function App() {
  return (
    <ScoreProvider>
      <Header />
      <ActiveGestureProvider>
        <Board />
      </ActiveGestureProvider>
    </ScoreProvider>
  );
}

export default App;
