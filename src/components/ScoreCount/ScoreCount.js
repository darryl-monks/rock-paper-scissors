import { useScore } from '../../contexts/ScoreContext';

const ScoreCount = () => {
  const { score } = useScore();

  return (
    <>
      <div>{score}</div>
    </>
  );
};

export default ScoreCount;
