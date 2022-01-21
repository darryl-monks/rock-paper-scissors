import Gesture from '../Gesture/Gesture';

const GESTURES = ['Rock', 'Paper', 'Scissors'];

const Gestures = () => {
  return (
    <>
      {GESTURES.map((gesture, index) => (
        <Gesture gesture={gesture} key={index}></Gesture>
      ))}
    </>
  );
};

export default Gestures;
