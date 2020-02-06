export class Game {
  constructor(env, bike, rexp, texp){
  this.env = env;
  this.bike = bike;
  this.rexp = rexp;
  this.texp = texp;
  }
  rideBike(){
    let rexp = generateNumber()
    // if (rexp === 1 ){
    //   return("you fell off your bike")
    // } else {
    //   rexp += this.rexp
    return rexp;
    // } 
  }

}
function generateNumber(){
  var number = Math.floor( Math.random() * 6 ) +1;
  return number;
}