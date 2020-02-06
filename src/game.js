export class Game {
  constructor(env, bike, rexp, texp){
  this.env = env;
  this.bike = bike;
  this.rexp = rexp;
  this.texp = texp;
  }
  checkRide(number){
    if (number === 1 ){
      return("you fell off your bike")
    } else {
      this.rexp += number
      console.log(this.rexp)
      return this.rexp
    } 
  }
}

export function generateNumber(){
  var number = Math.floor( Math.random() * 10) +1;
  return number;
}
