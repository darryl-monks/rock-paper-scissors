import Choice from '../Choice/Choice';

function Choices(props) {
  const { choices, onChoiceClick } = props;

  return (
    <div>
      {choices.map(({ id, choice }) => (
        <Choice key={id} id={id} choice={choice} onChoiceClick={onChoiceClick} />
      ))}
    </div>
  );
}

export default Choices;
