function Header(props) {
  const { score } = props;

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
