let userScore=0;
let compScore=0;

let choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
  let userChoicePara=document.querySelector("#user-score");
  let compChoicePara=document.querySelector("#comp-score");

const geneChoice=()=>{
    const  options=["rock","paper","scissors"];
    const rdmIdx=Math.floor(Math.random()*3);

    return options[rdmIdx];
};


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice= choice.getAttribute("id");
      
        playGame(userChoice);
        
       
      
    });
});


const draw=()=>{
    msg.innerText="Game Draw! Play again";
    msg.style.backgroundColor="black";
    msg.style.color="white";
};

const playGame=(userChoice)=>{

    //generate comp choice
const compChoice= geneChoice();

    if(userChoice===compChoice){
      draw();
    }
    else{
        //initialize
        let userWin=true;

        if(userChoice === "rock"){
            // comp=> scissors,paper
            userWin= compChoice==="paper"?false:true;
            

        } else if(userChoice==="paper"){
            // comp=> rock,scissors
      userWin= compChoice==="scissors"?false:true;
        } else{
            userWin= compChoice==="rock"? false:true;
        }


        showWinner(userWin,compChoice,userChoice);
    }
};

const showWinner= (userWin, compChoice,userChoice)=>{
    if(userWin){
        userScore++;
        userChoicePara.innerText=userScore;
        msg.innerText=  `You Win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";

    }else{
        compScore++;
        compChoicePara.innerText=compScore;
           msg.innerText=  `You Loose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
};