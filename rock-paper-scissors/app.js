let userScore = 0;
let computerScore = 0;
const userScore_span=document.getElementById("user-score");
const computerScore_span=document.getElementById("comp-score");
const scoreboard_div=document.querySelector(".score-board");
const result_p=document.querySelector(".result > p");
const rock_div=document.getElementById("r");
const paper_div=document.getElementById("p");
const scissors_div=document.getElementById("s");

function getComputerChoice(){
    const choices=['r','p','s'];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];

}
function convertToWord(letter){
    if(letter==="r")return "Rock";
    if(letter==="p")return"Paper";
    return "Scissors";
}
function win(userchoice,computerChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML= computerScore;
    const smallUserWord="user ".fontsize(3).sub();
    const smallCompword="comp".fontsize(3).sub();
    result_p.innerHTML=`${convertToWord(userchoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompword}. You win! `;
    document.getElementById(userchoice).classList.add('green-glow');
    setTimeout(()=>document.getElementById(userchoice).classList.remove('green-glow'),300);

}
function lose(userchoice,computerChoice){
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML= computerScore;
    const smallUserWord="user ".fontsize(3).sub();
    const smallCompword="comp".fontsize(3).sub();
    result_p.innerHTML=`${convertToWord(userchoice)}${smallUserWord} lost to ${convertToWord(computerChoice)}${smallCompword}. You lost! `;
    document.getElementById(userchoice).classList.add('red-glow');
    setTimeout(()=>document.getElementById(userchoice).classList.remove('red-glow'),300);

    
}
function draw(userchoice,computerChoice){
    const smallUserWord="user ".fontsize(3).sub();
    const smallCompword="comp".fontsize(3).sub();
    result_p.innerHTML=`${convertToWord(userchoice)}${smallUserWord} equals ${convertToWord(computerChoice)}${smallCompword}.Its draw `;
    document.getElementById(userchoice).classList.add('gray-glow');
    setTimeout(()=>document.getElementById(userchoice).classList.remove('gray-glow'),300);

   
   
}




function game(userchoice){
    const computerChoice=getComputerChoice();
   switch(userchoice+computerChoice){
       case "rs":
       case "pr":
       case "sp":
           win(userchoice,computerChoice);
           break;
       case "rp":
       case "ps":
       case "sr":
           lose(userchoice,computerChoice);
           break; 
       case "rr":
       case "pp":
       case "ss":
           draw(userchoice,computerChoice);
           break;
       


   }


}
function main(){
    rock_div.addEventListener('click', function () {
       game("r");
    })
    paper_div.addEventListener('click', function () {
       game("p");
    })
    scissors_div.addEventListener('click', function () {
        game("s");
    })
}
main();