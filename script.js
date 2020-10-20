
let roundNum = document.querySelector("#roundP");
let userScore = document.querySelector("#userScoreP");
let compScore = document.querySelector("#compScoreP");
let yourStatus = document.querySelector("#yourStatus");
let compStatus = document.querySelector("#compStatus");
let choice = document.querySelector("#choice");
    
let input;
let computerPick;
roundNum = 0;
userScore = 0;
compScore = 0;

choice.innerHTML="Click Start to begin";

//click start to begin game, button dissapears
startBtn.addEventListener("click", function () {
    game();
    startBtn.id = "startBtnOff";
})

//5 rounds
if(roundNum < 5) {
    function game () {
        choice.innerHTML="Choose an option:";
        console.log("game started");
        rockImg.onmouseover = function() {
            choice.innerHTML="Rock";
        }
        paperImg.onmouseover = function() {
            choice.innerHTML="Paper";
        }
        scissorsImg.onmouseover = function() {
            choice.innerHTML="Scissors";
        }  

        //click on picture to begin round & select choice
        rockBtn.addEventListener("click", function() {
            input = "rock";
            round() 
            console.log("you chose: " + input);
        });
        paperBtn.addEventListener("click", function() {
            input = "paper";
            round();
            console.log("you chose: " + input);
        });
        scissorsBtn.addEventListener("click", function() {
            input = "scissors";
            round();
            console.log("you chose: " + input);
        });
            function round() {

                compPlay(); 
            }
        }

        //computer picks random element from array
        function compPlay() {
            let options = ["rock", "paper",  "scissors"];
            let computerPick = Math.floor(Math.random() * options.length);
            console.log("Computer chose: " + options[computerPick]);
            
            //if_else reports round
            if (input == "rock" && computerPick == 0 || input == "paper" && computerPick == 1 || input == "scissors" && computerPick == 2 ) {
                statusP.innerHTML="Tie - " + input + " doesn't know what to do with " + options[computerPick]; 
                roundNum++;
            
            }else if (input == "rock" && computerPick == 1) {
                roundNum++;
                compScore++;
                statusP.innerHTML="<span style='color:red'>Confused rock loses to paper</span>";    

            }else if (input == "rock" && computerPick == 2) {
                roundNum++;
                userScore++;
                statusP.innerHTML="<span style='color:green'>Powerful rock destroys puny scissors</span>"; {
                }
                
            }else if (input == "paper" && computerPick == 0) {
                roundNum++;
                userScore++;
                statusP.innerHTML="<span style='color:green'>Sneaky paper defeats rock</span>";

            }else if (input == "paper" && computerPick == 2) {
                roundNum++;
                compScore++;
                statusP.innerHTML="<span style='color:red'>Oh no, paper gets shredded by scissors</span>";
                
            }else if (input == "scissors" && computerPick == 0) {
                roundNum++;
                compScore++;
                statusP.innerHTML="<span style='color:red'>Ouch - scissors get destroyed by rock</span>";
                
            }else if (input == "scissors" && computerPick == 1) {
                roundNum++;
                userScore++;
                statusP.innerHTML="<span style='color:green'>Sharp scissors easily cut through paper</span>";
            }

            //game end - pop-up window appears
            if (roundNum >= 5) {
                
                if(userScore>compScore) {
                    
                    myFunction();
                    function myFunction() {
                        noPopUp.id = "popUp";
                        noEndButton.id = "endButton";
                        noPopUpP.id = "popUpP";
                        noCoverUp.id = "coverUp";
                    } 
                    popUpP.innerHTML="You Won"
                    endButton.innerHTML="Hurrah!"
                }else if(compScore>userScore) {
                    
                    myFunction();
                    function myFunction() {
                        noPopUp.id = "popUp";
                        noEndButton.id = "endButton";
                        noPopUpP.id = "popUpP";
                        noCoverUp.id = "coverUp";
                    } 
                    popUpP.innerHTML="You Lost"
                    endButton.innerHTML="Shame"
                }else {
                    popUpP.innerHTML="Tie"
                    myFunction();
                    function myFunction() {
                        noPopUp.id = "popUp";
                        noEndButton.id = "endButton";
                        noPopUpP.id = "popUpP";
                        noCoverUp.id = "coverUp";
                    } 
                    popUpP.innerHTML="Tie!"
                    endButton.innerHTML="Hmph"
                }  
            }
            yourStatus.innerHTML="You chose: " + input;
            compStatus.innerHTML="Computer chose: " + options[computerPick];
            roundP.innerHTML="Round: " + roundNum + "/5.";
            userScoreP.innerHTML="Your score: " + userScore + ".";
            compScoreP.innerHTML="Computer score: " + compScore + ".";
            
        }
    }    
   


