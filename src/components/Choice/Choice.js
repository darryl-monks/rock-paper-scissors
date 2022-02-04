function Choice(props) {
  const { id, name, onChoiceClick } = props;

  return <button onClick={() => onChoiceClick(id)}>{name}</button>;
}

export default Choice;
