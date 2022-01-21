import Gesture from '../Gesture/Gesture';
import { useActiveGesture } from '../../contexts/ActiveGestureContext';

const Round = () => {
  const { activeGesture } = useActiveGesture();

  return (
    <>
      <Gesture gesture={activeGesture} />
      <Gesture gesture="Paper" />
    </>
  );
};

export default Round;
