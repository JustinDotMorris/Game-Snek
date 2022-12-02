//Selectors
const gameBoard = document.querySelector("#gameBoard");
const gameBoxes = document.querySelectorAll(".gameBoard__div");
const upButton = document.querySelector("#upButton");
const leftButton = document.querySelector("#leftButton");
const rightButton = document.querySelector("#rightButton");
const downButton = document.querySelector("#downButton");
const startButton = document.querySelector("#startButton");
const score = document.querySelector("#score");

const gameBoardWidth = 5; //How many squares make up the width of the grid
let snakeIndexPosition = 0; //The square that the snake is in
let scoreNum = 0; //The current score
let appleIndexPosition = Math.floor(Math.random() * 24);//Randomises the position that the apple is in

//Function to control snake movement
const snakeControls = (e) => {
    if (e.target.innerText === "⇒") {//right arrow
        snakeIndexPosition = snakeIndexPosition+1;
        console.log("right arrow");
    }
    else if (e.target.innerText === "⇑") {//up arrow
        snakeIndexPosition = snakeIndexPosition-gameBoardWidth
        console.log("up arrow");
    }
    else if (e.target.innerText === "⇐") {//left arrow
        snakeIndexPosition = snakeIndexPosition-1
        console.log("left arrow");
    }
    else if (e.target.innerText === "⇓") {//down arrow
        snakeIndexPosition = snakeIndexPosition+gameBoardWidth
        console.log("down arrow");
    }
    updateSnakePosition();
    updateApplePosition();
    collisionEvent();
};

const updateSnakePosition = () => {

    console.log(snakeIndexPosition);
    //Get an array of all divs
    console.log(gameBoxes[snakeIndexPosition]);

    //Remove class from unwanted position and Add to the correct div using snakeIndexPosition
    gameBoxes.forEach(element => {
        element.classList.remove("snake");
    });
    gameBoxes[snakeIndexPosition].classList.add("snake");
}

const updateApplePosition = () => {
    console.log(gameBoxes[appleIndexPosition]);
    //Spawn fruit
    gameBoxes[appleIndexPosition].classList.add("apple");
    console.log("old apple number is"+ appleIndexPosition);
    //remove fruit, spawn somewhere else
}

const collisionEvent = () => {
    //find when fruit are at the same position in array
    if (snakeIndexPosition === appleIndexPosition) {
        //add score
        scoreNum = scoreNum + 1;
        //Adjust score display
        score.innerHTML = `
        <h3>Score: ${scoreNum}</h3>
        `
        //make apple dissapear
        gameBoxes.forEach(element => {
            element.classList.remove("apple");
            console.log("new apple number is"+ appleIndexPosition);
        });
        gameBoxes[appleIndexPosition].classList.remove("apple")
        //move apple to new position
        appleIndexPosition = Math.floor(Math.random() * 24);

        //make apple re-appear
        gameBoxes[appleIndexPosition].classList.add("apple");
    }
    //game borders
    //add score
};

//Event Listeners
document.addEventListener("keyup", snakeControls)
upButton.addEventListener("click",snakeControls);
leftButton.addEventListener("click",snakeControls);
rightButton.addEventListener("click",snakeControls);
downButton.addEventListener("click",snakeControls);
// startButton.addEventListener("click",startGame);