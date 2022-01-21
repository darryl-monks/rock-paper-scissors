import Round from '../Round/Round';
import Gestures from '../Gestures/Gestures';
import { usePlayerGesture } from '../../contexts/PlayerGestureProvider';

const Board = () => {
  const { playerGesture } = usePlayerGesture();

  if (playerGesture) {
    return <Round />;
  }

  return <Gestures />;
};

export default Board;
