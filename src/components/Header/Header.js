import styled from 'styled-components';
import Logo from '../Logo/Logo';
import ScoreBoard from '../ScoreBoard/ScoreBoard';

const Container = styled.header`
  display: flex;
  padding: 1rem;
  border: 2px solid hsl(217, 16%, 45%);
  border-radius: 1rem;
`;

function Header() {
  return (
    <>
      <Container>
        <Logo />
        <ScoreBoard />
      </Container>
    </>
  );
}

export default Header;
