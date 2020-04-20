let option = ['rock','paper', 'scissor'];
 let round = 0; let playerScore=0; let computerScore=0;let res; let select

function computerPlay(option){
   select = option[Math.floor(Math.random() * option.length)];
  return select;
}

      function playRound(playerSelection, computerSelection) {
                        
                  if (playerSelection == computerSelection){
                    return res= "Play Again";
                  }
                   else if((computerSelection =='paper' && playerSelection =='scissor') || (computerSelection =='rock' && playerSelection =='paper') || (computerSelection =='scissor' && playerSelection =='rock')){
                    ++playerScore;
                     document.querySelector("#computer").innerHTML = 'Computer Score:' + " " + computerScore  ;
                     document.querySelector("#player").innerHTML = 'Player Score:' + " " + playerScore  ;
                    return res = `You win ${playerSelection} beats ${computerSelection}`;
                                    
                     }
                     else{
                       ++computerScore;
                       document.querySelector("#computer").innerHTML = 'Computer Score:' + " " + computerScore  ;
                       document.querySelector("#player").innerHTML = 'Player Score:' + " " + playerScore  ;
                      return res = `You lose ${computerSelection} beats ${playerSelection}`;
        
                     }
				                               
                         }
                        
						

   const btn = document.querySelectorAll("#btn");
btn.forEach((button) => {
	button.addEventListener('click', (e) => {
document.querySelector("#selection").style = "display: flex; justify-content:space-evenly;margin: 0 auto;margin-top: 20px;"
	let player = (button.innerHTML).toLowerCase();
	let computerSelection = computerPlay(option);
 playRound(player,computerSelection);
   round++;
   document.querySelector("#round").innerHTML = 'Round' + " " + round;  
         document.querySelector("#play").innerHTML = 'Player choice:' + " " + player;  
         document.querySelector("#comp").innerHTML = 'Computer choice:' + " " + computerSelection;  

  document.querySelector("#res").innerHTML = 'Result:' + " " + res  ;
          if(computerScore == 5){
          console.log("COMPUTER WON!!!!"); 
          document.querySelector("#winner").innerHTML = 'OOPS! YOU LOST THE GAME!!!!' ;
          btn.forEach((button) => {
          disable(button);});
          }
        if(playerScore== 5){
        	 btn.forEach((button) => {
          document.querySelector("#winner").innerHTML = 'YAY!! YOU WON THE GAME!!!!' ; 
          disable(button);});
          } 
    function reses(){
    playerScore=0; computerScore=0;round = 0; res = "Start the game";
   document.querySelector("#computer").innerHTML = 'Computer Score:' + " " + computerScore  ;
   document.querySelector("#player").innerHTML = 'Player Score:' + " " + playerScore  ; 
	document.querySelector("#round").innerHTML = 'Round' + " " + round; 
	document.querySelector("#res").innerHTML = 'Result:' + " " + res  ; 
	document.querySelector("#winner").innerHTML = " ";
  document.querySelector("#play").innerHTML = 'Player choice:' + " " + "NULL";  
  document.querySelector("#comp").innerHTML = 'Computer choice:' + " " + "NULL"; 
	 }

	const reset =document.querySelector("#reset");
	reset.addEventListener('click', (e) => { reses(); enable(button); });

	const replay=document.querySelector("#replay");
	replay.addEventListener('click', (e) => { reses(); enable(button); });
      
    });

});
function disable(button){
	button.disabled = true;
}
function enable(button){
  button.disabled = false;
}
       
       