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

// -------------------------------------------------------

//get existing coordinates

//each second +1/-1 to whichever axis is being moved along 

//Functions - Game Loop
// const loop = () => {
//     requestAnimationFrame(loop);
// }

//Functions - Direction

// const upmovement = () => {
//     //grid position -10
    
// };

// const leftMovement = () => {
//     //grid position -1

// };

// const rightMovement = () => {
//     //grid position +1

// };

// const downMovement = () => {
//     //grid position +10

// };

//Functions - Movement
// const movementFunction = setInterval(() => {

// },1000);

//Make an array for 100 divs
// const gridPositionsID = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
// console.log(gridPositionsID);

//what will happen
//create a grid of 100 divs with each position a unique id

// gridPositionsID.forEach(element => {
//     gameBoard.innerHTML = (`
//     <div id="snake"></div>
    
//     `);
// });

    // const movementFunction = setInterval(() => {

// },1000);

    // currentSnake.forEach(index => gameBoxes[index].classList.add('snake'));
    // interval = setInterval(moveOutcomes, intervalTime)


// //Event listeners
// upButton.addEventListener("click",movementFunction);
// leftButton.addEventListener("click",movementFunction);
// rightButton.addEventListener("click",movementFunction);
// downButton.addEventListener("click",movementFunction);

// requestAnimationFrame(loop);

