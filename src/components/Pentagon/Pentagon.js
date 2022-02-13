import styled from 'styled-components';
import pentagonImage from '../../assets/images/bg-pentagon.svg';
import Breakpoints from '../../assets/styles/Breakpoints';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: scale(0.7);

  @media (min-width: ${Breakpoints.small}) {
    transform: scale(0.8);
  }

  @media (min-width: ${Breakpoints.medium}) {
    transform: scale(1.1);
  }
`;

function Pentagon() {
  return (
    <Container>
      <img src={pentagonImage} alt="Choices Background" />
    </Container>
  );
}

export default Pentagon;
