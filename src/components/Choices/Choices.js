import Choice from '../Choice/Choice';

function Choices(props) {
  const { choices, onChoiceClick } = props;

  return (
    <>
      {choices.map(({ id, choice, icon, theme }) => (
        <Choice
          key={id}
          id={id}
          choice={choice}
          icon={icon}
          theme={theme}
          onChoiceClick={onChoiceClick}
        />
      ))}
    </>
  );
}

export default Choices;
