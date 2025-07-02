humanScore=0;
computerScore=0;
let m=getComputerChoice();
let n=getHumanChoice();
function getComputerChoice(){
    let x=Math.random();
    if (0 <= x && x <=0.3){
        return "rock";
    }else if (0.3< x && x <=0.6){
        return "papper";
    }else{
        return "scissor"; 
    }
}
function getHumanChoice(){
    let y=prompt("Please insert you choice for rock papper and scissor Game: ");
    return y;
}
function score(){
    if ((m==="rock" && n==="scissor") || (m==="scissor" && n==="papper") || (m==="papper" && n==="rock")){
      return "Score="+"computer:"+computerScore+1+","+"Human:"+humanScore;
    }else if((n==="rock" && m==="scissor") || (n==="scissor" && m==="papper") || (n==="papper" && m==="rock")){
     return "Score="+"computer:"+computerScore+","+"Human:"+humanScore+1;
    }else if((n==="rock" || m==="rock") || (n==="scissor" || m==="scissor") || (n==="papper" || m==="papper")){
    }else if(n==="rock" && m==="papper") {
     return "Score="+"computer:"+computerScore+1+","+"Human:"+humanScore;
    }else{
     console.log("you won!");
     return "Score="+"computer:"+computerScore+","+"Human:"+humanScore+1;
    }
}
function result(){
    console.log(`you: ${n}`);
    console.log(`Computer: ${m}`);
    if ((m==="rock" && n==="scissor") || (m==="scissor" && n==="papper") || (m==="papper" && n==="rock")){
     console.log("Computer won!");  
    }else if((n==="rock" && m==="scissor") || (n==="scissor" && m==="papper") || (n==="papper" && m==="rock")){
     console.log("You won!");
    }else if((n==="rock" || m==="rock") || (n==="scissor" || m==="scissor") || (n==="papper" || m==="papper")){
     console.log("Try again!");
    }else if(n==="rock" && m==="papper") {
     console.log("computer won!");
    }else{
     console.log("you won!");
    }
}
result();
console.log(score());

