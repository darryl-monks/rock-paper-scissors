import Gesture from '../Gesture/Gesture';
import { useActiveGesture } from '../../contexts/ActiveGestureContext';

const Round = () => {
  const { activeGesture } = useActiveGesture();

  return (
    <>
      <Gesture gesture={activeGesture} isStatic />
      <Gesture gesture="Paper" isStatic />
    </>
  );
};

export default Round;
