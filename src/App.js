import Header from './components/Header/Header';
import GameBoard from './components/GameBoard/GameBoard';
import { ScoreContextProvider } from './contexts/ScoreContext';

function App() {
  return (
    <ScoreContextProvider>
      <Header />
      <GameBoard />
    </ScoreContextProvider>
  );
}

export default App;
