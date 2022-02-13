import styled from 'styled-components';
import Choice from '../Choice/Choice';
import Pentagon from '../Pentagon/Pentagon';
import Breakpoints from '../../assets/styles/Breakpoints';

const Container = styled.div`
  width: 16rem;
  height: 16rem;
  margin: 2rem auto 0;
  position: relative;

  @media (min-width: ${Breakpoints.small}) {
    width: 21.75rem;
    height: 21.75rem;
  }

  @media (min-width: ${Breakpoints.medium}) {
    width: 32rem;
    height: 32rem;
  }
`;

function Choices(props) {
  const { choices, onChoiceClick } = props;

  return (
    <Container>
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
      <Pentagon />
    </Container>
  );
}

export default Choices;
