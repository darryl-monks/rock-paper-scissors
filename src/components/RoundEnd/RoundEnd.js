function RoundEnd(props) {
  const { playerChoice, computerChoice, gameState, restartGame } = props;

  return (
    <div>
      <div>
        {playerChoice.choice} : {computerChoice.choice}
      </div>
      <div>{gameState}</div>
      <div>
        <button onClick={() => restartGame()}>Play Again</button>
      </div>
    </div>
  );
}

export default RoundEnd;
