import Gesture from '../Gesture/Gesture';
import availableGestures from '../../data/availableGestures';

const Gestures = () => {
  return (
    <>
      {availableGestures.map((gesture, index) => (
        <Gesture gesture={gesture} key={index}></Gesture>
      ))}
    </>
  );
};

export default Gestures;
