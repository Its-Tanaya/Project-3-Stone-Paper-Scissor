/*const buttons = document.querySelectorAll('.choice');
const result = document.querySelector('.result');

const choices = ["rock", "paper", "scissors"];
buttons.forEach(button=>{
    button.addEventListener('click',()=>{
        const playerchoice=button.innerHTML;
        console.log(playerchoice);
        const computerchoice=choices[Math.floor(Math.random()*choices.length)];
        if(playerchoice==computerchoice){
            result.textContent="Draw";

        }
        else if( (playerchoice === "✊ Rock" && computerchoice === "scissors") ||
      (playerchoice === "✋ Paper" && computerchoice === " rock") ||
      (playerchoice === "✌️ Scissors" && computerchoice === "paper"))
            {
                result.textContent="You Won The Game!!";
        }
        else{
            result.textContent="Computer Won The Game!!";
        }


    });
});*/
const buttons = document.querySelectorAll('.choice');
const result = document.querySelector('.result');

const choices = ["rock", "paper", "scissors"];

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const playerchoice = button.innerHTML;
    const word = playerchoice.split(' ')[1].toLowerCase(); // "Rock" → "rock"
    const computerchoice = choices[Math.floor(Math.random() * choices.length)];

    if (word === computerchoice) {
      result.textContent = "Draw";
    }
    else if (
      (word === "rock" && computerchoice === "scissors") ||
      (word === "paper" && computerchoice === "rock") ||
      (word === "scissors" && computerchoice === "paper")
    ) {
      result.textContent = "You Won The Game!!";
    }
    else {
      result.textContent = "Computer Won The Game!!";
    }
  });
});
