import { useActiveGesture } from '../../contexts/ActiveGestureContext';

const Gesture = ({ gesture }) => {
  const { activeGesture, setActiveGesture } = useActiveGesture();

  const handleClick = (event) => {
    setActiveGesture(gesture);
  };

  if (activeGesture) {
    return <div>{gesture}</div>;
  }

  return <button onClick={handleClick}>{gesture}</button>;
};

export default Gesture;
