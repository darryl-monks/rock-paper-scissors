function RoundStart(props) {
  const { playerChoice, countdown } = props;
  return (
    <div>
      {playerChoice.choice} : {countdown}
    </div>
  );
}

export default RoundStart;
