console.log("Code Starts");

//Toss The Game
let turn = document.getElementById("turn");
let tossBtn = document.getElementById("tossbtn");
let toss = 0;
let playerTurnCounter = 0; //1 for player 1 ; 2 for player 2
tossBtn.addEventListener("click", function () {
  toss = Math.floor(Math.random() * 2) + 1;
  if (toss === 1) {
    turn.innerText = "1st Turn : Player 1";
    playerTurnCounter = 1;
  }
  if (toss === 2) {
    turn.innerText = "1st Turn : Player 2";
    playerTurnCounter = 2;
  }
});

//Random number generator
var count = 0;
function randNumGen() {
  const random = Math.floor(Math.random() * 5) + 1;
  count = random;
  return random;
}
var count = 0;
//var btn = document.getElementById("btn");
// var disp = document.getElementById("display");

//btn.onclick = function () {
//count++;
//disp.innerHTML = count;
//};
let generateBtn = document.getElementById("generatebtn");
var count = 0;
//var btn = document.getElementById("btn");
var disp = document.getElementById("display");

generateBtn.onclick = function () {
  count++;
  disp.innerHTML = count;
};
let input = document.querySelector(".input");
let button = document.getElementById("generatebtn");

button.disabled = false; //setting button state to disabled

input.addEventListener("change", stateHandle);

function stateHandle() {
  if (document.querySelector(".input").value === 2) {
    button.disabled = true; //button remains disabled
  } else {
    button.disabled = false; //button is enabled
  }
}

generateBtn.addEventListener("click", function () {
  let randNum = document.getElementById("randomNum");
  randNum.innerText = randNumGen();
  if (playerTurnCounter === 1) {
    player1Gaming();
    whoWin();
    turn.innerText = "Turn : Player 2";
    playerTurnCounter = 2;
  } else {
    player2Gaming();
    whoWin();
    turn.innerText = "Turn : Player 1";
    playerTurnCounter = 1;
  }
});

//Functions For Human Generator
// var canvas = document.getElementById("player1");
// var context = canvas.getContext("2d");

//Face
function faceGen() {
  context.beginPath();
  context.fillStyle = "bisque"; // #ffe4c4
  context.arc(200, 50, 15, 0, Math.PI * 2, true); // draw circle for head
  // (x,y) center, radius, start angle, end angle, anticlockwise
  context.fill();
}

//Smile
function smileGen() {
  context.beginPath();
  context.strokeStyle = "red"; // color
  context.lineWidth = 1.5;
  context.arc(200, 50, 10, Math.PI / 6, (5 * Math.PI) / 6, false); // draw semicircle for smiling
  context.stroke();
}

// eyes
function eyesGen() {
  context.beginPath();
  context.fillStyle = "green"; // color
  context.arc(195, 45, 1.5, 0, Math.PI * 2, true); // draw left eye
  context.fill();
  context.arc(205, 45, 1.5, 0, Math.PI * 2, true); // draw right eye
  context.fill();
}

// body
function bodyGen() {
  context.beginPath();
  context.moveTo(200, 65);
  context.lineTo(200, 115);
  context.strokeStyle = "navy";
  context.stroke();
}

// arms
function armsGen() {
  context.beginPath();
  context.strokeStyle = "#0000ff"; // blue
  context.moveTo(200, 65);
  context.lineTo(180, 95);
  context.moveTo(200, 65);
  context.lineTo(220, 95);
  context.stroke();
}
// legs
function legsGen() {
  context.beginPath();
  context.strokeStyle = "orange";
  context.moveTo(200, 115);
  context.lineTo(190, 160);
  context.moveTo(200, 115);
  context.lineTo(210, 160);
  context.stroke();
}

//Gaming For Player 1 turn
let temp10 = 0; //for Box 1
let temp11 = 0; //for Box 2
let temp12 = 0; //for Box 3
let temp13 = 0; //for Box 4
let temp14 = 0; //for Box 5
function player1Gaming() {
  switch (count) {
    case 1: {
      let canvas = document.getElementById("E11");
      context = canvas.getContext("2d");
      switch (temp10) {
        case 0:
          faceGen();
          temp10 += 1;
          break;
        case 1:
          eyesGen();
          temp10 += 1;
          break;
        case 2:
          smileGen();
          temp10 += 1;
          break;
        case 3:
          bodyGen();
          temp10 += 1;
          break;
        case 4:
          armsGen();
          temp10 += 1;
          break;
        case 5:
          legsGen();
          break;
      }
      break;
    }
    case 2: {
      let canvas = document.getElementById("E21");
      context = canvas.getContext("2d");
      switch (temp11) {
        case 0:
          faceGen();
          temp11 += 1;
          break;
        case 1:
          eyesGen();
          temp11 += 1;
          break;
        case 2:
          smileGen();
          temp11 += 1;
          break;
        case 3:
          bodyGen();
          temp11 += 1;
          break;
        case 4:
          armsGen();
          temp11 += 1;
          break;
        case 5:
          legsGen();
          break;
      }
      break;
    }
    case 3: {
      let canvas = document.getElementById("E31");
      context = canvas.getContext("2d");
      switch (temp12) {
        case 0:
          faceGen();
          temp12 += 1;
          break;
        case 1:
          eyesGen();
          temp12 += 1;
          break;
        case 2:
          smileGen();
          temp12 += 1;
          break;
        case 3:
          bodyGen();
          temp12 += 1;
          break;
        case 4:
          armsGen();
          temp12 += 1;
          break;
        case 5:
          legsGen();
          break;
      }
      break;
    }
    case 4: {
      let canvas = document.getElementById("E41");
      context = canvas.getContext("2d");
      switch (temp13) {
        case 0:
          faceGen();
          temp13 += 1;
          break;
        case 1:
          eyesGen();
          temp13 += 1;
          break;
        case 2:
          smileGen();
          temp13 += 1;
          break;
        case 3:
          bodyGen();
          temp13 += 1;
          break;
        case 4:
          armsGen();
          temp13 += 1;
          break;
        case 5:
          legsGen();
          break;
      }
      break;
    }
    case 5: {
      let canvas = document.getElementById("E51");
      context = canvas.getContext("2d");
      switch (temp14) {
        case 0:
          faceGen();
          temp14 += 1;
          break;
        case 1:
          eyesGen();
          temp14 += 1;
          break;
        case 2:
          smileGen();
          temp14 += 1;
          break;
        case 3:
          bodyGen();
          temp14 += 1;
          break;
        case 4:
          armsGen();
          temp14 += 1;
          break;
        case 5:
          legsGen();
          break;
      }
      break;
    }
  }
}

//Gaming for Player 2 turn
let temp20 = 0;
let temp21 = 0;
let temp22 = 0;
let temp23 = 0;
let temp24 = 0;
function player2Gaming() {
  switch (count) {
    case 1: {
      let canvas = document.getElementById("E12");
      context = canvas.getContext("2d");
      switch (temp20) {
        case 0:
          faceGen();
          temp20 += 1;
          break;
        case 1:
          eyesGen();
          temp20 += 1;
          break;
        case 2:
          smileGen();
          temp20 += 1;
          break;
        case 3:
          bodyGen();
          temp20 += 1;
          break;
        case 4:
          armsGen();
          temp20 += 1;
          break;
        case 5:
          legsGen();
          break;
      }
      break;
    }
    case 2: {
      let canvas = document.getElementById("E22");
      context = canvas.getContext("2d");
      switch (temp21) {
        case 0:
          faceGen();
          temp21 += 1;
          break;
        case 1:
          eyesGen();
          temp21 += 1;
          break;
        case 2:
          smileGen();
          temp21 += 1;
          break;
        case 3:
          bodyGen();
          temp21 += 1;
          break;
        case 4:
          armsGen();
          temp21 += 1;
          break;
        case 5:
          legsGen();
          break;
      }
      break;
    }
    case 3: {
      let canvas = document.getElementById("E32");
      context = canvas.getContext("2d");
      switch (temp22) {
        case 0:
          faceGen();
          temp22 += 1;
          break;
        case 1:
          eyesGen();
          temp22 += 1;
          break;
        case 2:
          smileGen();
          temp22 += 1;
          break;
        case 3:
          bodyGen();
          temp22 += 1;
          break;
        case 4:
          armsGen();
          temp22 += 1;
          break;
        case 5:
          legsGen();
          break;
      }
      break;
    }
    case 4: {
      let canvas = document.getElementById("E42");
      context = canvas.getContext("2d");
      switch (temp23) {
        case 0:
          faceGen();
          temp23 += 1;
          break;
        case 1:
          eyesGen();
          temp23 += 1;
          break;
        case 2:
          smileGen();
          temp23 += 1;
          break;
        case 3:
          bodyGen();
          temp23 += 1;
          break;
        case 4:
          armsGen();
          temp23 += 1;
          break;
        case 5:
          legsGen();
          break;
      }
      break;
    }
    case 5: {
      let canvas = document.getElementById("E52");
      context = canvas.getContext("2d");
      switch (temp24) {
        case 0:
          faceGen();
          temp24 += 1;
          break;
        case 1:
          eyesGen();
          temp24 += 1;
          break;
        case 2:
          smileGen();
          temp24 += 1;
          break;
        case 3:
          bodyGen();
          temp24 += 1;
          break;
        case 4:
          armsGen();
          temp24 += 1;
          break;
        case 5:
          legsGen();
          break;
      }
      break;
    }
  }
}
//Checking Win
let Win = "DRAW!";
function whoWin() {
  if (temp10 == 5 && temp11 == 5 && temp12 == 5 && temp13 == 5 && temp14 == 5) {
    Win = "Player 1 Wins";
    alert(Win);
    let congrats = document.getElementById("congo");
    congrats.innerText = "Congratulations You Won The Game";
  }
  if (temp20 == 5 && temp21 == 5 && temp22 == 5 && temp23 == 5 && temp24 == 5) {
    Win = "Player 2 Wins";
    alert(Win);
    let congrats = document.getElementById("congo");
    congrats.innerText = "Congratulations You Won The Game";
  }
}
//Reseting The Game Using Reset button
let resetBtn = document.getElementById("resetbtn");
function reset() {
  location.reload();
}
