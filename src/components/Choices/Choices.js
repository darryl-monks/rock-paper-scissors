import Choice from '../Choice/Choice';

function Choices(props) {
  const { choices, onChoiceClick } = props;

  return (
    <div>
      {choices.map(({ id, name }) => (
        <Choice key={id} id={id} name={name} onChoiceClick={onChoiceClick} />
      ))}
    </div>
  );
}

export default Choices;
