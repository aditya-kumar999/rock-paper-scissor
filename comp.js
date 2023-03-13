const button = document.querySelectorAll('#weapon');
button.forEach((btn)=>{
    btn.addEventListener('click',playRound)
})

const compPoints = document.querySelector('.compPoints');
const youPoints = document.querySelector('.youPoints');
const declare = document.querySelector('.p2');
const p1 = document.querySelector('.p1');
const dialog = document.querySelector('.dialog');
const dialogP = document.querySelector('.dialogP');
const newGame = document.querySelector('.newGame');
const element = document.querySelector('.hidDiv');
let hidden = element.getAttribute("hidden");

newGame.addEventListener('click', () => {
    dialog.close();
})

let result;
let announce;

let comp=0;
let you=0;

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

function playRound (e, computerSelection) {
    element.setAttribute("hidden", "hidden");
    let player = e.target.className;
    computerSelection = getComputerChoice();
 
    if(player=="rock"){
        switch (computerSelection) {
            case "rock":
                result = "Tie!";
                announce = "Both chose Rock";
                break;
        
            case "paper":
                result = "You Lose!";
                announce = "Paper beats Rock";
                break;

            case "scissor":
                result = "You Won!";
                announce = "Rock beats Scissor";
                break;
        }
    }else if(player=="paper"){
        switch (computerSelection) {
            case "rock":
                result = "You Won!";
                announce = "Paper beats Rock";
                break;
        
            case "paper":
                result = "Tie!";
                announce = "Both chose Paper";
                break;

            case "scissor":
                result = "You Lose!";
                announce = "Scissor beats Paper";
                break;
        }
    }else {
        switch (computerSelection) {
            case "rock":
                result = "You Lose!";
                announce = "Rock beats Scissor";
                break;
        
            case "paper":
                result = "You Won!";
                announce = "Scissor beats Paper";
                break;

            case "scissor":
                result = "Tie!";
                announce = "Both chose Scissor";
                break;
        }
    }
    game(result);
}

function game(result) {
    
        if(result.search("Won")!=-1){
            ++you;
            youPoints.textContent = you;
            p1.textContent = result;
            declare.textContent = announce;
            console.log(`Computer:${comp}  You:${you}`);
        }else if(result.search("Lose")!=-1){
            ++comp;
            compPoints.textContent = comp;
            p1.textContent = result;
            declare.textContent = announce;
            console.log(`Computer:${comp}  You:${you}`);
        }
        else{
            ++comp;
            ++you;
            compPoints.textContent = comp;
            youPoints.textContent = you;
            p1.textContent = result;
            declare.textContent = announce;
            console.log(`Computer:${comp}  You:${you}`);
        }
    if(comp==5||you==5){
        if(comp==you){
            dialogP.textContent = "Tie!";
            element.removeAttribute("hidden");
            dialog.showModal();
            comp=0;
            you=0;
            compPoints.textContent = comp;
            youPoints.textContent = you;
        }
        else if(comp>you){
            dialogP.textContent = "You Lost!";
            element.removeAttribute("hidden");
            dialog.showModal();
            comp=0;
            you=0;
            compPoints.textContent = comp;
            youPoints.textContent = you;
        }
        else{
            dialogP.textContent = "You Won!";
            element.removeAttribute("hidden");
            dialog.showModal();
            comp=0;
            you=0;
            compPoints.textContent = comp;
            youPoints.textContent = you;
        }
        declare.textContent = "First to score 5 points wins the game";
        p1.textContent = "Choose Your Weapon";
}

    }