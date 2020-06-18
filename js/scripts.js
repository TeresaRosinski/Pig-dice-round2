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
function Player (playerName) {
  this.turnScore= 0;
  this.totalScore=0;
  this.playerName= playerName;
}

// function to add a name to the player?Would have to link to UI?
Player.prototype.AddName = function (){} 

// function to add the scores of each turn and round to player object?
Player.prototype.addTurnScore = function (){
  this.turnScore += diceRoll(); 
} 


// function to update the total score of each player
Player.prototype.addTotalScore = function () {} 

function startGame() {}


let player1 = new Player ("Teresa"); 
player1.addTurnScore();
console.log (player1);
let player2 = new Player ("Christine");
player2.addTurnScore();
console.log(player2);
//Object -- die 


//Random Number Function -- this needs to be connected to a button and roll on 'click'
function diceRoll(){
  return Math.floor(Math.random()* 6 + 1);
};
console.log(dieRoll());

//Should we have a seperate object to hold only scores??
function Game () {  
  scores=[];
}



//User Interface Logic

