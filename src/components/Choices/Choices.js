function Choices(props) {
  const { choices, onChoiceClick } = props;

  return (
    <div>
      {choices.map(({ name, id }) => (
        <button key={id} onClick={() => onChoiceClick(id)}>
          {name}
        </button>
      ))}
    </div>
  );
}

export default Choices;
