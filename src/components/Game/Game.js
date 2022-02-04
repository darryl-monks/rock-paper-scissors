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

  function handlePlayerChoice(playerChoiceId) {
    const choice = choiceAPI.getChoice(playerChoiceId);
    setPlayerChoice(choice);
    return choice;
  }

  function handleComputerChoice() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const choice = choiceAPI.getComputerChoice();
        setComputerChoice(choice);
        resolve(choice);
      }, 2000);
    });
  }

  async function playRound(playerChoiceId) {
    const chosenPlayerChoice = handlePlayerChoice(playerChoiceId);
    const chosenComputerChoice = await handleComputerChoice();
    chooseWinner(chosenPlayerChoice, chosenComputerChoice);
  }

  function chooseWinner(chosenPlayerChoice, chosenComputerChoice) {
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

  return <Choices choices={choiceAPI.choices} onChoiceClick={playRound} />;
}

export default Game;
