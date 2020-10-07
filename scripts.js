const game = ()=> {
    let pScore = 0;
    let cScore = 0;

    // Starts the game
    const startGame = () =>{
        const playBtn = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector('.match');

        playBtn.addEventListener("click", () => {
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });
    };

//Play match
    const playMatch = () => {
        const options = document.querySelectorAll(".options button")
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");
        //Computer Options
        const computerOptions = ["rock", "paper", "scissors"];
        const computerOptions = Math.random() * 3;
        console.log(computerNumber);
    }

// Call all the inner function
 startGame();
 playMatch();
};

// Start the game function
game();