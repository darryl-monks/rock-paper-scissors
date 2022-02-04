import { useScore } from '../../context/Score/Score';

function Header() {
  const { score } = useScore();

  return (
    <>
      <header>
        <h1>
          Rock
          <br />
          Paper
          <br />
          Scissors
        </h1>

        <div>
          <div>Score</div>
          <div>{score}</div>
        </div>
      </header>
    </>
  );
}

export default Header;
