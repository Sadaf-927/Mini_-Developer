let boxs =document.querySelectorAll(".box");
let resetGameBtn=document.querySelector("#resetButn");
let newGameBtn=document.querySelector("#newButn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");


let turnO= true; //player-O,player-X
const winPatterns=[
    [0,1,2],
    [0,3,6],
    
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
    

];
 boxs.forEach((box)=>{
    box.addEventListener("click",()=>{


        if( turnO){
        box.innerText="O";
    turnO=false;
        } else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
checkWinner()
    });
 });


//winner print
const showWinner=(winner)=>{
    msg.innerText=`Congratulations! , Winner is ${winner} `;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const disableBoxes=()=>{
    for( let box of boxs){
        box.disabled=true;
    }
};
const enableBoxes=()=>{
    for( let box of boxs){
        box.disabled=false;
        box.innerText="";

    }
};

//  reset game fun

const resetGame=()=>{
    turnO=true;
    enableBoxes();
       msgContainer.classList.add("hide");
};



const checkWinner=()=>{
    for(  let pattern of winPatterns){

let posVal1=   boxs[pattern[0]].innerText;
let posVal2=   boxs[pattern[1]].innerText;
let posVal3=   boxs[pattern[2]].innerText
            
if( posVal1!=""&& posVal2!="" && posVal3!=""
    ){
        if( posVal1==posVal2 && posVal2==posVal3 ){
   showWinner( posVal1);

        }
    }
       
    }
 };

newGameBtn.addEventListener("click",resetGame);
resetGameBtn.addEventListener("click",resetGame);

