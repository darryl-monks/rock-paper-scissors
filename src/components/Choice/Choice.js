import styled from 'styled-components';

const Button = styled.button`
  margin: 0.25rem;
`;

function Choice(props) {
  const { id, choice, onChoiceClick } = props;

  return <Button onClick={() => onChoiceClick(id)}>{choice}</Button>;
}

export default Choice;
