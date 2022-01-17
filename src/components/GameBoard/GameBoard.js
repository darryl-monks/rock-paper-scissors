import Gesture from '../Gesture/Gesture';
import { ScoreContext } from '../../contexts/ScoreContext';
import { useContext } from 'react';

const GameBoard = () => {
  const { scoreDispatch } = useContext(ScoreContext);

  return (
    <div>
      <Gesture name="Rock" />
      <Gesture name="Paper" />
      <Gesture name="Scissors" />

      <div>
        <p>TEMP: Testing ScoreContext:</p>
        <button onClick={() => scoreDispatch('increase')}>
          Increase Score
        </button>
        <button onClick={() => scoreDispatch('decrease')}>
          Decrease Score
        </button>
      </div>
    </div>
  );
};

export default GameBoard;
