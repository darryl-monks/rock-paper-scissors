import styled from 'styled-components';

const Button = styled.button`
  cursor: pointer;
  width: 8rem;
  height: 8rem;
  border-radius: 100%;
  background-color: white;
  border-width: 1rem;
  border-style: solid;
  border-color: ${(props) => props.theme};
  transition: transform 0.25s ease-in-out;

  &:hover {
    transform: scale(1.25);
  }
`;

const Icon = styled.img`
  max-width: 2.5rem;
`;

function Choice(props) {
  const { id, choice, icon, theme, onChoiceClick } = props;

  return (
    <Button theme={theme} onClick={() => onChoiceClick(id)} aria-label={choice}>
      <Icon src={icon} alt={choice} />
    </Button>
  );
}

export default Choice;
