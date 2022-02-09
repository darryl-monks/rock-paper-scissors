import styled from 'styled-components';
import { useScore } from '../../context/Score/Score';

const Container = styled.div`
  margin-left: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 0.5rem;
  width: 100%;
  max-width: 10rem;
`;

const Heading = styled.div`
  color: hsl(229, 64%, 46%);
  text-transform: uppercase;
`;

const Score = styled.div`
  color: hsl(229, 25%, 31%);
  font-size: 4rem;
`;

function ScoreBoard() {
  const { score } = useScore();

  return (
    <Container>
      <Heading>Score</Heading>
      <Score>{score}</Score>
    </Container>
  );
}

export default ScoreBoard;
