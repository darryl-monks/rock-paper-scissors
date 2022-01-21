import { usePlayerGesture } from '../../contexts/PlayerGestureProvider';

const Gesture = ({ gesture }) => {
  const { playerGesture, setPlayerGesture } = usePlayerGesture();

  const handleClick = () => {
    setPlayerGesture(gesture);
  };

  if (playerGesture) {
    return <div>{gesture}</div>;
  }

  return <button onClick={handleClick}>{gesture}</button>;
};

export default Gesture;
