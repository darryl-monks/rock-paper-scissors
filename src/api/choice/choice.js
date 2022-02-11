import rockIcon from '../../assets/images/icon-rock.svg';
import paperIcon from '../../assets/images/icon-paper.svg';
import scissorsIcon from '../../assets/images/icon-scissors.svg';
import lizardIcon from '../../assets/images/icon-lizard.svg';
import spockIcon from '../../assets/images/icon-spock.svg';

class ChoiceAPI {
  constructor() {
    this.choices = [
      {
        id: 1,
        choice: 'Rock',
        icon: rockIcon,
        theme: 'hsl(349, 71%, 52%)',
        beats: ['Scissors', 'Lizard'],
      },
      {
        id: 2,
        choice: 'Paper',
        icon: paperIcon,
        theme: 'hsl(230, 89%, 62%)',
        beats: ['Rock', 'Spock'],
      },
      {
        id: 3,
        choice: 'Scissors',
        icon: scissorsIcon,
        theme: 'hsl(39, 89%, 49%)',
        beats: ['Paper', 'Lizard'],
      },
      {
        id: 4,
        choice: 'Lizard',
        icon: lizardIcon,
        theme: 'hsl(261, 73%, 60%)',
        beats: ['Spock', 'Paper'],
      },
      {
        id: 5,
        choice: 'Spock',
        icon: spockIcon,
        theme: 'hsl(189, 59%, 53%)',
        beats: ['Scissors', 'Rock'],
      },
    ];
  }

  getChoice(id) {
    return this.choices.find((choice) => choice.id === id);
  }

  getComputerChoice() {
    const randomGeneratedChoice = Math.ceil(Math.random() * this.choices.length);
    return this.getChoice(randomGeneratedChoice);
  }

  didPlayerBeatComputer(playerChoice, computerChoice) {
    return playerChoice.beats.some((choice) => choice === computerChoice.choice);
  }
}

export default new ChoiceAPI();
