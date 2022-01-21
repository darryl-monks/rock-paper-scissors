import Gesture from '../Gesture/Gesture';
import availableGestures from '../../data/availableGestures';
import { useScore } from '../../contexts/ScoreContext';
import { usePlayerGesture } from '../../contexts/PlayerGestureProvider';

const Round = () => {
  const { scoreDispatch } = useScore();
  const { playerGesture } = usePlayerGesture();
  const cpuChoice = Math.floor(Math.random() * availableGestures.length);
  const cpuGesture = availableGestures[cpuChoice];

  return (
    <>
      <button onClick={() => scoreDispatch('increase')}>Increase Score</button>
      <Gesture gesture={playerGesture} />
      <Gesture gesture={cpuGesture} />
    </>
  );
};

export default Round;
