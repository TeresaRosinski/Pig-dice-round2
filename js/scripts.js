// 2 players -- 2 independent users
//Total score
//Turn score
// one dice --- roll --- 1> roll again --hold --- if you hold what
   // -- 2, 3, 4 --> [2+3+4+4] = turn score + total score at the end of turn
    //-- 2 ,3 , 1 --turn score = 0
// Whoever gets to 100 first is the winner

//Object - scoreBoard 
// something for dice - random number -- DiceNum - set to method that calculates random number 
//between 1 and 6

//prototype -- name / player / score (2-TotalScore and TurnScore)

// logic to determine whose turn it is -- constructor fuction?
//logic to decide who goes first? (Same as line 15?)


//Object - Player name, Their Turn Score, Their Total score

// A big loop that contains the whole game and ends when one score = 100
// inside the big loop are smaller loops that end when a person selects to hold or gets a 1

//Business Logic
console.log("hi");
function Player (playerName) {
  this.turnScore= 0;
  this.totalScore= 0;
  this.playerName= playerName;
}

//Random Number Function -- this needs to be connected to a button and roll on 'click'
function diceRoll(){
  return Math.floor(Math.random()* 6 + 1);
};

function DoTurn(player){
  player.AddDiceRolls();
  player.addTotalScore();
}

console.log("hello");
function Game (player1, player2) {
  while(player1.totalScore<100 || player2.totalScore<100)  {
    DoTurn(player1);
    DoTurn(player2);
  }
}

Player.prototype.AddName = function (){};
console.log("hello");

Player.prototype.addTurnScore = function (){
  if (this.playerName === "player1") { 
    this.turnScore = diceRoll();
}

//Switch Prototype

//Prototype -- rolls dice -- when 1 -- stops turn and gives the user a 0, when it's greater than
//1 it allows the user to roll again or hold --- at then end it adds up all of their dice rolls from that round


Player.prototype.AddDiceRolls = function () {
  let rollAgain = true; 
  while(rollAgain) {
    let roll = diceRoll();
    if (roll >= 2) {
      this.turnScore +=roll;
      rollAgain = prompt("Would you like to roll again?");
    } else if (roll === 1){
      return this.turnScore=0;
      alert("try next time");
    }
    return this.turnScore; 
  }
}

// function to update the total score of each player
Player.prototype.addTotalScore = function () {
  this.totalScore += this.turnScore;
  return this.totalScore;
}

//Hold prototype
Player.prototype.Hold = function () {
  this.totalScore += this.turnScore;
  return this.totalScore;
}

// function startGame() {};


//User Interface Logic

let player1 = new Player ("Teresa"); 
player1.addTurnScore();
player1.addTotalScore();
player1.AddDiceRolls();

console.log(player1);
let player2 = new Player ("Christine");
player2.addTurnScore();
player2.addTotalScore();
player2.AddDiceRolls();
console.log(player2);
let game1 = new Game (player1, player2); 

// $(document).ready(function(){
  
//   $("#roll").click(function(){
//   $("#player1-score").text(" " + game1.player1 + " ");
//   $("#player2-score").text(" " + game1.player2 + " ");
//   });
