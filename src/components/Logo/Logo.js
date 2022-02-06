import choiceAPI from '../../api/choice/choice';

function Logo() {
  return (
    <h1>
      {choiceAPI.choices.map(({ id, choice }) => (
        <div key={id}>{choice}</div>
      ))}
    </h1>
  );
}

export default Logo;
