// 2 Functions
//
// Global variables
// gameStart : reset the The Goal Glow and the 4 crystal values 
// gamePlay : establishes the order of operations, onClick events and tabulates the in-game scoring, as well as the counters for wins by
//              the player and the The Glow Goal
//
var TGG = 0
var c1 = 0
var c2 = 0
var c3 = 0
var c4 = 0
var cVal = 0
var c1Val = 0
var c2Val = 0
var c3Val = 0
var c4Val = 0
var cArray = []
var cArrayVal = 0
var playerScore = 0
var TGG_wins= 0
var player_wins = 0
var playAgain = 0

function gameStart(){

    // Alert to player
    alert("Welcome to the Crystal Collector game. Instructions and guidance appear on the left-hand side of the screen. Good luck collecting!");

    // generate TGG
    TGG = Math.floor(Math.random() * 1000) + 1;
    console.log(TGG);

    // set the HTML to TGG
    $("#TGG-score").text(TGG);

    // generate crystal numeric values and assign to each crystal HTML element's attribute

    cArray = [c1Val, c2Val, c3Val, c4Val];
    console.log(cArray);
 
    for(i=0;i<cArray.lengthl;i++){

        cArrayVal= Math.floor(Math.random() * 10) + 1;
        console.log(cArrayVal)
        console.log("-----")

        // swtich (cArray[i])

        //     case c1Val
        //         $(".c1").attr=c1Val
        //     case c2Val
        //         $(".c2").attr=c2Val
        //     case c3Val
        //         $(".c3").attr=c3Val
        //     case v4Val
        //         $(".c4").attr=c4Val
    };


};

gameStart();

// function gamePlay(){

//  the onclick events per crystal
//  for each onclick with the array of crystals, assign attribute the c_Val
//  running sum for the playerScore
//  if then to compare playerScore vs TGG
//  if playerScore < TGG, gamePlay() continues
//  if playerScore > TGG, prompt with the "You lost. click OK to play again"...capture playAgain value
    //  if playAgain = True gameStart() else ... pop-up picture of Skekung
//  if playerScore = TGG, alert with "YOU ARE THE GOAL GLOW"...show pic from joyous/victory pic from The Dark Crystal
    //  if playAgain = True gameStart() else ... pop-up picture of Skekung

// gameplay();
