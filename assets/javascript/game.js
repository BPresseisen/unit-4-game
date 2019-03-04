// 2 Functions
//
// Global variables
// gameStart : reset the The Goal Glow and the 4 crystal values 
// gamePlay : establishes the order of operations, onClick events and tabulates the in-game scoring, as well as the counters for wins by
//              the player and the The Glow Goal
//
var TGG = 0
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
    TGG = 12 + (Math.floor(Math.random() * 119) -1);
    console.log("goal number: ", TGG);

    // set the HTML to TGG
    $(".TGG-score").text(TGG);

    // generate crystal numeric values and assign to each crystal HTML element's attribute

    cArray = [0,0,0,0];
    console.log("crystal numbers: ", cArray);
 
    for(i=0; i < cArray.length; i++){

        cArrayVal = Math.floor(Math.random() * 11) + 1;
        console.log("one crystal value: ", cArrayVal);

        cArray[i]=cArrayVal;
        console.log(cArrayVal);
        console.log("-----");
    };

};

gameStart();

// function gamePlay(){

    $(".c1").on("click",function(){
    playerScore = playerScore + cArray[0];
    console.log("the playerScore is : " + playerScore);
    $(".PLAYER-score").text(playerScore);
    gameEval();
    });

    $(".c2").on("click",function(){
    playerScore = playerScore + cArray[1];
    console.log("the playerScore is : " + playerScore);
    $(".PLAYER-score").text(playerScore);
    gameEval();
    });

    $(".c3").on("click",function(){
    playerScore = playerScore + cArray[2];
    console.log("the playerScore is : " + playerScore);
    $(".PLAYER-score").text(playerScore);
    gameEval();
    });

    $(".c4").on("click",function(){
    playerScore = playerScore + cArray[3];
    console.log("the playerScore is : " + playerScore);
    $(".PLAYER-score").text(playerScore);
    gameEval();
    });
// };

// gamePlay();

function gameEval(){

    if(playerScore > TGG){
        console.log("The playerScore is: "+ playerScore);
        console.log("The TGG is: "+ TGG);
        TGG_wins=TGG_wins++
        $(".TGG-wins_total").text(TGG_wins);
        
        playAgain=confirm("Your score exceeded TGG. Click 'OK' to play again or 'Cancel' to gaze at this loss with wanton eyes.");
        console.log(playAgain);
        if(playAgain===true){
            playerScore=0;
            $(".PLAYER-score").text(playerScore);
            gameStart();

        };
   
    }else if(playerScore===TGG && TGG !== 0 && playerScore !== 0){
        console.log("The playerScore is: "+ playerScore);
        console.log("The TGG is: "+ TGG);
        player_wins=player_wins++
        $(".PLAYER-wins_total").text(player_wins);
        playAgain=confirm("Your scored THE GLOW GOAL!! Click 'OK' to play again or 'Cancel' if you're crystal collecting days are done.");
        console.log(playAgain);

        if(playAgain===true){

            playerScore=0;
            $(".PLAYER-score").text(playerScore);
            gameStart();

        };

    }else{
        // gamePlay();
    };
};

