import { useContext } from 'react';
import { ScoreContext } from '../../contexts/ScoreContext';

const ScoreCount = () => {
  const { scoreCount } = useContext(ScoreContext);

  return (
    <>
      <div>{scoreCount}</div>
    </>
  );
};

export default ScoreCount;
