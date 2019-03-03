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
    
    // $(".c1").attribute(cArray[0]);
    // console.log("c1 is: "+ cArray[0]);
    // console.log("------")
    // console.log($(".c1")[0]);

};

gameStart();

$("#c1").on("click",function(){
    playerScore = playerScore + cArray[0];
    console.log("the playerScore is : " + playerScore);
});

$("#c2").on("click",function(){
    playerScore = playerScore + cArray[1];
    console.log("the playerScore is : " + playerScore);
});

$("#c3").on("click",function(){
    playerScore = playerScore + cArray[2];
    console.log("the playerScore is : " + playerScore);
});

$("#c4").on("click",function(){
    playerScore = playerScore + cArray[3];
    console.log("the playerScore is : " + playerScore);
});

$(".PLAYER-score").text(playerScore);

if(playerScore > TGG){

    TGG_wins=TGG_wins++
    $(".TGG-wins_total").text(TGG_wins);
    playAgain=prompt("Your score exceeded TGG. Click 'OK' to play again or 'Cancel' to gaze at this loss with wanton eyes.");

    if(playAgain===1){

        playerScore=0;
        $(".PLAYER-score").text(playerScore);
        gameStart();

    };
   
}else if(playerScore=TGG && TGG !== 0 && playerScore !== 0){

    player_wins=player_wins++
    $(".PLAYER-wins_total").text(player_wins);
    playAgain=prompt("Your scored THE GLOW GOAL!! Click 'OK' to play again or 'Cancel' if you're crystal collecting days are done.");

    if(playAgain===1){

        playerScore=0;
        $(".PLAYER-score").text(playerScore);
        gameStart();

    };
};


