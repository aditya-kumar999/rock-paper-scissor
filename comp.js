function getComputerChoice() {
    let ranNum = Math.floor(Math.random()*100);
    let choice;
    if(ranNum<=33){
        choice = "rock";
    }
    else if(ranNum<=66){
        choice = "paper";
    }
    else{
        choice = "scissor";
    }
    return choice;
}

function playRound (playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase();
    let result;
    if(player=="rock"){
        switch (computerSelection) {
            case "rock":
                result = "Tie!You both chose rock"
                break;
        
            case "paper":
                result = "You lose!Paper beats Rock"
                break;

            case "scissor":
                result = "You won!Rock beats Scissor"
                break;
        }
    }else if(player=="paper"){
        switch (computerSelection) {
            case "rock":
                result = "You won!Paper beats Rock"
                break;
        
            case "paper":
                result = "Tie!You both chose Paper"
                break;

            case "scissor":
                result = "You lose!Scissor beats Paper"
                break;
        }
    }else {
        switch (computerSelection) {
            case "rock":
                result = "You lose!Rock beats Scissor"
                break;
        
            case "paper":
                result = "You won!Scissor beats Paper"
                break;

            case "scissor":
                result = "Tie!You both chose Scissor"
                break;
        }
    }
    return result;
}

function game() {
    let comp=0;
    let you=0;
    for(let i=0;i<5;i++){
        let player = prompt("Write what you choose:");
        let result = playRound(player, getComputerChoice())
        if(result.search("won")!=-1){
            ++you;
            console.log(result);
        }else if(result.search("lose")!=-1){
            ++comp;
            console.log(result);
        }
        else{
            ++comp;
            ++you;
            console.log(result);
        }
    }
    if(comp==you){
        console.log(`It's a Tie computer:${comp} and you:${you}`);
    }
    else if(comp>you){
        console.log(`You lost!computer:${comp} and you:${you}`)
    }
    else{
        console.log(`You won!computer:${comp} and you:${you}`)
    }
}

game();