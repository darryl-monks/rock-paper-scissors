import styled from 'styled-components';
import choiceAPI from '../../api/choice/choice';

const Container = styled.h1`
  margin: 0;
  font-size: 1.5rem;
  text-transform: uppercase;
`;

function Logo() {
  return (
    <Container>
      {choiceAPI.choices.map(({ id, choice }) => (
        <div key={id}>{choice}</div>
      ))}
    </Container>
  );
}

export default Logo;
