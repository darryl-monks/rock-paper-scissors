import { useState } from 'react';
import Header from './components/Header/Header';
import Game from './components/Game/Game';

function App() {
  const [score, setScore] = useState(0);

  return (
    <>
      <Header score={score} />
      <Game score={score} setScore={setScore} />
    </>
  );
}

export default App;
