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
  const [countdown, setCountdown] = useState(3);
  const [gameState, setGameState] = useState(null);

  function handlePlayerChoice(chosenPlayerChoiceId) {
    const choice = choiceAPI.getChoice(chosenPlayerChoiceId);
    setPlayerChoice(choice);
    return choice;
  }

  function handleComputerChoice() {
    return new Promise((resolve) => {
      let currentSecond = 3;

      const countdownComputerChoice = setInterval(() => {
        if (currentSecond > 1) {
          currentSecond = currentSecond - 1;
          setCountdown(currentSecond);
        } else {
          const choice = choiceAPI.getComputerChoice();
          setComputerChoice(choice);
          resolve(choice);
          clearTimeout(countdownComputerChoice);
        }
      }, 1000);
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
    setCountdown(3);
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
    return <RoundStart playerChoice={playerChoice} countdown={countdown} />;
  }

  return <Choices choices={choiceAPI.choices} onChoiceClick={startRound} />;
}

export default Game;
