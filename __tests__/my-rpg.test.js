import { Game } from "./../src/game"

describe('Game', () => {
  let game = new Game

  test('should generate a random number', () => {
    let randomNumber = game.rideBike();
    expect(Number.isInteger(randomNumber)).toEqual(true);
  })

})