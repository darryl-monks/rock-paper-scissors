import { useScore } from '../../context/Score/Score';

function ScoreBoard() {
  const { score } = useScore();

  return (
    <div>
      <div>Score</div>
      <div>{score}</div>
    </div>
  );
}

export default ScoreBoard;
