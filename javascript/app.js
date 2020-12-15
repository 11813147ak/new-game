'use strict';

/*
console.log(document.querySelector(".message").textContent);

document.querySelector(".message").textContent="Correct!!!";

document.querySelector(".number").textContent=13;

document.querySelector(".score").textContent=10;

 for <input> 

document.querySelector(".guess").value=23;
*/

let number=Math.trunc(Math.random()*20)+1;

let score=20;
let highscore=0;





document.querySelector(".check").addEventListener('click',function(req,res){
		const guess=Number(document.querySelector(".guess").value);
		console.log(guess,typeof guess);


		if(!guess){
			document.querySelector('.message').textContent="🤣No Number";
		}
		else if (guess==number) {
			document.querySelector(".message").textContent='👼Correct NUmber!!';
			document.querySelector(".number").textContent=number;
			document.querySelector("body").style.backgroundColor="#60b347";
			document.querySelector(".number").style.width="30rem";

			if(score>highscore){
				highscore=score;
			document.querySelector(".highscore").textContent=highscore;
		}
	}
		else if(guess>number){
			if(score>1){
			document.querySelector(".message").textContent="🕵️‍♀Too High.";
			score=score-1;
			document.querySelector(".score").textContent=score;
		}else{
			document.querySelector(".message").textContent="You lose the game";
			document.querySelector("score").textContent=0;
		}}
		else if(guess<number){
			if(score>1){
			document.querySelector(".message").textContent="🕵️‍♀Too LOW.";
			score=score-1;
			document.querySelector(".score").textContent=score;
		}else{
			document.querySelector(".message").textContent="You lose the game";
			document.querySelector("score").textContent=0;
		}}



});

document.querySelector(".again").addEventListener('click',function(req,res){

				score=20;
				number=Math.trunc(Math.random()*20)+1;

				document.querySelector(".message").textContent="Start processing...";

				document.querySelector(".score").textContent=score;
				document.querySelector(".number").textContent="?";
				document.querySelector(".guess").value='';
				document.querySelector("body").style.backgroundColor="#222";

});





