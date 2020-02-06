import { Game, generateNumber } from "./../src/game"


describe('Game', () => {
  let game = new Game("mountain","Santa Cruz",0,0)

  test('should generate a random number', () => {
    let randomNumberUnderTen = generateNumber();
    expect(randomNumberUnderTen).toBeLessThanOrEqual(10);
  })
  test('should return "you fell off your bike" if checkRide() is passed a 1 as an argument', () => {
    let StringOutput = game.checkRide(1);
    expect(StringOutput).toEqual("you fell off your bike");
  })
  test('should return a number if checkRide() is passed a number greater then 1', () => {
    let number = game.checkRide(2);
    expect(Number.isInteger(number)).toEqual(true);
  })
  

})
