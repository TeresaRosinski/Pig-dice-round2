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
console.log("hello");
function Player (playerName) {
  this.turnScore= 0;
  this.totalScore= 0;
  this.playerName= playerName;
}

function diceRoll(){
  return Math.floor(Math.random()* 6 + 1);
};

console.log(diceRoll());

function Game (player1, player2) {  
  currentPlayer= player1;
  diceRoll();
};


// function to add a name to the player?Would have to link to UI?
Player.prototype.AddName = function (){};
console.log("hello");
// function to add the scores of each turn and round to player object?

Player.prototype.addTurnScore = function (){
  if (this.playerName === "player1"){
    this.turnScore += diceRoll();
    console.log(this.turnScore);
  }
}

//Switch Prototype

//Prototype -- rolls dice -- when 1 -- stops turn and gives the user a 0, when it's greater than
//1 it allows the user to roll again or hold --- at then end it adds up all of their dice rolls from that round


Player.prototype.AddDiceRolls = function () {
  let roll = diceRoll();
  if (roll >= 2) {
    return this.turnScore +=roll;
    //rollAgain();// connected to a button that shows up on the UI
  } else if (roll = 1){
    return this.turnScore=0;
    alert("try next time");
   // switchPlayer();
  }
  // this //push rolls into array of roll --> push into turn score --> push into total score
}

// function to update the total score of each player
Player.prototype.addTotalScore = function () {
  this.totalScore += this.turnScore;
}

console.log("check");
let player1 = new Player ("Teresa"); 

player1.addTurnScore();
player1.AddDiceRolls();
player1.addTotalScore();
console.log(player1);



console.log("check");
let player2 = new Player ("Christine");
player2.AddDiceRolls();
console.log(player2);
let game1 = new Game (player1, player2); 
console.log(game1);
//Hold prototype

Player.prototype.Hold = function () {
  this.totalScore += this.turnScore;
  return this.totalScore;
}


// function startGame() {};



//Object -- die 

//Random Number Function -- this needs to be connected to a button and roll on 'click'







//User Interface Logic