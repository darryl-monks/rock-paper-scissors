import Round from '../Round/Round';
import Gestures from '../Gestures/Gestures';
import { useActiveGesture } from '../../contexts/ActiveGestureContext';

const Board = () => {
  const { activeGesture } = useActiveGesture();

  if (activeGesture) {
    return <Round />;
  }

  return <Gestures />;
};

export default Board;
