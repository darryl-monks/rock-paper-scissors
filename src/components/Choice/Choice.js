function Choice(props) {
  const { id, choice, onChoiceClick } = props;

  return <button onClick={() => onChoiceClick(id)}>{choice}</button>;
}

export default Choice;
