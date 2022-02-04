import { useState } from 'react';
import { useScore } from '../../context/Score/Score';
import choiceAPI from '../../api/choice/choice';
import Choices from '../Choices/Choices';
import RoundStart from '../RoundStart/RoundStart';
import RoundEnd from '../RoundEnd/RoundEnd';

function Game() {
  const { scoreDispatch } = useScore();
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [gameState, setGameState] = useState(null);

  function handlePlayerChoice(chosenPlayerChoiceId) {
    const choice = choiceAPI.getChoice(chosenPlayerChoiceId);
    setPlayerChoice(choice);
    return choice;
  }

  function handleComputerChoice() {
    const delay = 2000;

    return new Promise((resolve) => {
      setTimeout(() => {
        const choice = choiceAPI.getComputerChoice();
        setComputerChoice(choice);
        resolve(choice);
      }, delay);
    });
  }

  function endRound(chosenPlayerChoice, chosenComputerChoice) {
    const playerBeatComputer = choiceAPI.didPlayerBeatComputer(
      chosenPlayerChoice,
      chosenComputerChoice
    );

    if (playerBeatComputer) {
      setGameState('You Win');
      scoreDispatch('increase');
    } else if (chosenPlayerChoice === chosenComputerChoice) {
      setGameState('Draw');
    } else {
      setGameState('You Lose');
      scoreDispatch('decrease');
    }
  }

  async function startRound(chosenPlayerChoiceId) {
    const chosenPlayerChoice = handlePlayerChoice(chosenPlayerChoiceId);
    const chosenComputerChoice = await handleComputerChoice();
    endRound(chosenPlayerChoice, chosenComputerChoice);
  }

  function restartGame() {
    setGameState(null);
    setPlayerChoice(null);
    setComputerChoice(null);
  }

  if (playerChoice && computerChoice) {
    return (
      <RoundEnd
        playerChoice={playerChoice}
        computerChoice={computerChoice}
        gameState={gameState}
        restartGame={restartGame}
      />
    );
  }

  if (playerChoice) {
    return <RoundStart playerChoice={playerChoice} />;
  }

  return <Choices choices={choiceAPI.choices} onChoiceClick={startRound} />;
}

export default Game;
