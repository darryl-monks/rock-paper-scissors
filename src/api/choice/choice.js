class ChoiceAPI {
  constructor() {
    this.choices = [
      {
        id: 1,
        choice: 'Rock',
        beats: ['Scissors', 'Lizard'],
      },
      {
        id: 2,
        choice: 'Paper',
        beats: ['Rock', 'Spock'],
      },
      {
        id: 3,
        choice: 'Scissors',
        beats: ['Paper', 'Lizard'],
      },
      {
        id: 4,
        choice: 'Lizard',
        beats: ['Spock', 'Paper'],
      },
      {
        id: 5,
        choice: 'Spock',
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
