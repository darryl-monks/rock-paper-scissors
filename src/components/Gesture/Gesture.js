import { useActiveGesture } from '../../contexts/ActiveGestureContext';

const Gesture = ({ gesture, isStatic }) => {
  const { setActiveGesture } = useActiveGesture();

  const handleClick = (event) => {
    setActiveGesture(gesture);
  };

  if (isStatic) {
    return <div>{gesture}</div>;
  }

  return <button onClick={handleClick}>{gesture}</button>;
};

export default Gesture;
