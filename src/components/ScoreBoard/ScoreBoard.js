import styled from 'styled-components';
import { useScore } from '../../context/Score/Score';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  width: 100%;
  max-width: 8rem;
  padding: 1rem 0;
  background-color: #fff;
  border-radius: 0.5rem;
`;

const Heading = styled.div`
  font-size: 0.825rem;
  color: hsl(229, 64%, 46%);
  text-transform: uppercase;
  letter-spacing: 0.125rem;
`;

const Score = styled.div`
  color: hsl(229, 25%, 31%);
  font-size: 3.5rem;
  line-height: 3.5rem;
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
