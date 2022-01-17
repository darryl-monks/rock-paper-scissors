import Gesture from '../Gesture/Gesture';

const GameBoard = () => {
  return (
    <div>
      <Gesture name="Rock" />
      <Gesture name="Paper" />
      <Gesture name="Scissors" />
    </div>
  );
};

export default GameBoard;
