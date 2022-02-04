class ChoiceAPI {
  constructor() {
    this.choices = [
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
  }

  getChoice(id) {
    return this.choices.find((choice) => choice.id === id);
  }

  getComputerChoice() {
    const randomGeneratedChoice = Math.ceil(Math.random() * this.choices.length);
    return this.getChoice(randomGeneratedChoice);
  }

  didPlayerBeatComputer(playerChoice, computerChoice) {
    return playerChoice.beats.some((choice) => choice === computerChoice.name);
  }
}

export default new ChoiceAPI();
