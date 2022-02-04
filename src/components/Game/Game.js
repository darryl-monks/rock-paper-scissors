import { useState } from 'react';

const choices = [
  {
    id: 1,
    name: 'Rock',
    beats: ['Scissors', 'Lizard'],
  },
  {
    id: 2,
    name: 'Paper',
    beats: ['Rock', 'Spock'],
  },
  {
    id: 3,
    name: 'Scissors',
    beats: ['Paper', 'Lizard'],
  },
  {
    id: 4,
    name: 'Lizard',
    beats: ['Spock', 'Paper'],
  },
  {
    id: 5,
    name: 'Spock',
    beats: ['Scissors', 'Rock'],
  },
];

function Game(props) {
  const { score, setScore } = props;
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [gameState, setGameState] = useState(null);

  function getChoice(id) {
    return choices.find((choice) => choice.id === id);
  }

  function getComputerChoice() {
    const randomGeneratedChoice = Math.ceil(Math.random() * choices.length);
    return getChoice(randomGeneratedChoice);
  }

  function playRound(playerChoiceId) {
    const chosenPlayerChoice = getChoice(playerChoiceId);
    const chosenComputerChoice = getComputerChoice();

    setPlayerChoice(chosenPlayerChoice);
    setComputerChoice(chosenComputerChoice);
    handleWinner(chosenPlayerChoice, chosenComputerChoice);
  }

  function doesPlayerChoiceBeatComputerChoice(chosenPlayerChoice, chosenComputerChoice) {
    return chosenPlayerChoice.beats.some((option) => option === chosenComputerChoice.name);
  }

  function handleWinner(chosenPlayerChoice, chosenComputerChoice) {
    const playerBeatsComputer = doesPlayerChoiceBeatComputerChoice(chosenPlayerChoice, chosenComputerChoice);

    if (playerBeatsComputer) {
      setGameState('You Win');
      increaseScore();
    } else if (chosenPlayerChoice === chosenComputerChoice) {
      setGameState('Draw');
    } else {
      setGameState('You Lose');
      decreaseScore();
    }
  }

  function restartGame() {
    setGameState(null);
    setPlayerChoice(null);
    setComputerChoice(null);
  }

  function increaseScore() {
    setScore(score + 1);
  }

  function decreaseScore() {
    if (score > 0) {
      setScore(score - 1);
    }
  }

  if (playerChoice) {
    return (
      <div>
        <div>
          {playerChoice.name} : {computerChoice.name}
        </div>
        <div>{gameState}</div>
        <div>
          <button onClick={() => restartGame()}>Play Again</button>
        </div>
      </div>
    );
  }

  return (
    <div>
      {choices.map(({ name, id }) => (
        <button key={id} onClick={() => playRound(id)}>
          {name}
        </button>
      ))}
    </div>
  );
}

export default Game;
